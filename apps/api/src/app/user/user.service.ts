import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Exercise, User, Workout } from "@lean/api-interfaces";
import { Model } from "mongoose";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async addWorkout(id: string, workoutId: string) {
    this.userModel.updateOne({ _id: id }, { $push: { workoutsIds: workoutId } });
  }

  async findAllWorkouts(id: string): Promise<Workout[]> {
    const user = await this.userModel.findById(id).populate("workouts");
    return user.workouts;
  }

  async addExercise(id: string, exercise: Exercise) {
    const user = await this.userModel.findById(id);
    user.exercises.push(exercise);
    await user.save();
  }

  async findAllExercises(id: string): Promise<Exercise[]> {
    const user = await this.userModel.findById(id).populate("exercises");
    return user.exercises;
  }
}
