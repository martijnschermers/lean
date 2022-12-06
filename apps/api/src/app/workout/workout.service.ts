import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserService } from "../user/user.service";
import { Workout, WorkoutDocument } from "./workout.schema";
import { ExerciseService } from "../exercise/exercise.service";
import { Set } from "../set/set.schema";

@Injectable()
export class WorkoutService {
  constructor(@InjectModel(Workout.name) private workoutModel: Model<WorkoutDocument>, private userService: UserService, private exerciseService: ExerciseService) {
  }

  async findAll(id: string): Promise<Workout[]> {
    return this.userService.findAllWorkouts(id);
  }

  async findOne(id: string): Promise<Workout> {
    return this.workoutModel.findById(id, { __v: 0 });
  }

  async createWorkout(id: string, workout: Workout): Promise<Workout> {
    for (const set of workout.sets) {
      set.exercise = await this.exerciseService.findOne(set["exerciseId"]);
    }

    workout.volume = await this.calculateVolume(workout.sets);
    workout.prs = 0;

    const newWorkout = new this.workoutModel(workout);
    await newWorkout.save();

    await this.userService.addWorkout(id, newWorkout.id);

    return newWorkout.toObject({ versionKey: false });
  }

  private async calculateVolume(sets: Set[]): Promise<number> {
    let volume = 0;

    return new Promise(resolve => {
      sets.forEach(set => {
        volume += set.reps * set.weight;
      });
      resolve(volume);
    });
  }

  async deleteWorkout(userId: string, workoutId: string): Promise<boolean> {
    const result = await this.workoutModel.deleteOne({ _id: workoutId });

    if (result.deletedCount == 0) {
      throw new Error("Workout not found");
    }

    await this.userService.deleteWorkout(userId, workoutId);

    return true;
  }
}
