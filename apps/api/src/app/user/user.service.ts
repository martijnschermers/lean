import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, Workout } from "@lean/api-interfaces";
import { Model } from "mongoose";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async addWorkout(id: string, workoutId: string) {
    const user = await this.userModel.findById(id);
    user.workoutIds.push(workoutId);
    await user.save();
  }

  async findAllWorkouts(id: string): Promise<Workout[]> {
    const user = await this.userModel.findById(id).populate("workouts");
    return user.workouts;
  }
}
