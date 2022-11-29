import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserService } from "../user/user.service";
import { Workout, WorkoutDocument } from "./workout.schema";

@Injectable()
export class WorkoutService {
  constructor(@InjectModel(Workout.name) private workoutModel: Model<WorkoutDocument>, private userService: UserService) {
  }

  async findAll(id: string): Promise<Workout[]> {
    return this.userService.findAllWorkouts(id);
  }

  async createWorkout(id: string, workout: Workout): Promise<Workout> {
    const newWorkout = new this.workoutModel(workout);
    await newWorkout.save();

    await this.userService.addWorkout(id, newWorkout.id);

    return newWorkout.toObject({ versionKey: false });
  }
}
