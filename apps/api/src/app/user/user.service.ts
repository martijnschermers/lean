import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./user.schema";
import { Workout } from "../workout/workout.schema";
import { Exercise } from "../exercise/exercise.schema";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async addWorkout(id: string, workoutId: string): Promise<void> {
    this.userModel.updateOne({ _id: id }, { $push: { workoutsIds: workoutId } });
  }

  async findAllWorkouts(id: string): Promise<Workout[]> {
    const user = await this.userModel.findById(id).populate("workouts");
    return user.workouts;
  }

  async addExercise(id: string, exercise: Exercise): Promise<void> {
    const user = await this.userModel.findById(id);
    user.exercises.push(exercise);
    await user.save();
  }

  async findAllExercises(id: string): Promise<Exercise[]> {
    const user = await this.userModel.findById(id).populate("exercises");
    return user.exercises;
  }

  async findExercise(id: string, exerciseId: string): Promise<Exercise> {
    const user = await this.userModel.findById(id).populate("exercises");
    return user.exercises.find((exercise: Exercise) => exercise["_id"] == exerciseId);
  }
}
