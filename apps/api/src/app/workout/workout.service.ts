import { Injectable } from "@nestjs/common";
import { Workout } from "@lean/api-interfaces";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserService } from "../user/user.service";

@Injectable()
export class WorkoutService {
  constructor(@InjectModel(Workout.name) private workoutModel: Model<Workout>, private userService: UserService) {
  }

  async findAll(id: string): Promise<Workout[]> {
    return this.userService.findAllWorkouts(id);
  }

  async createWorkout(id: string, workout: Workout) {
    const newWorkout = new this.workoutModel(workout);
    await newWorkout.save();

    await this.userService.addWorkout(id, newWorkout.id);

    return newWorkout.toObject({ versionKey: false });
  }
}
