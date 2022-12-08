import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./user.schema";
import { Workout } from "../workout/workout.schema";
import { GroupWorkout } from "../group-workout/group-workout.schema";

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

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async addWorkout(id: string, workoutId: string): Promise<void> {
    return this.userModel.findByIdAndUpdate(id, { $push: { workouts: workoutId } });
  }

  async findAllWorkouts(id: string): Promise<Workout[]> {
    const user = await this.userModel.findById(id).populate("workouts");
    return user.workouts;
  }

  async deleteWorkout(userId: string, workoutId: string): Promise<void> {
    return this.userModel.findByIdAndUpdate(userId, { $pull: { workouts: workoutId } });
  }

  async follow(userId: string, followUserId: string): Promise<void> {
    const user = await this.userModel.findById(userId);
    const followUser = await this.userModel.findById(followUserId);

    if (followUser.followers.includes(user)) {
      throw new Error("Already following");
    }

    followUser.followers.push(user);
    await followUser.save();
  }

  async addGroupWorkout(userId: string, groupWorkout: GroupWorkout): Promise<void> {
    const user = await this.userModel.findById(userId);
    user.groupWorkouts.push(groupWorkout);
    await user.save();
  }
}
