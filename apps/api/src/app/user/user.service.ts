import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./user.schema";
import { Workout } from "../workout/workout.schema";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email });
  }

  async addWorkout(id: string, workoutId: string): Promise<void> {
    this.userModel.updateOne({ _id: id }, { $push: { workouts: workoutId } });
  }

  async findAllWorkouts(id: string): Promise<Workout[]> {
    const user = await this.userModel.findById(id).populate("workouts");
    return user.workouts;
  }
}
