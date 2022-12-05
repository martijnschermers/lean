import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UserService } from "../user/user.service";
import { Exercise, ExerciseDocument } from "./exercise.schema";

@Injectable()
export class ExerciseService {

  constructor(@InjectModel(Exercise.name) private exerciseModel: Model<ExerciseDocument>, private userService: UserService) {
  }

  async findAll(id: string): Promise<Exercise[]> {
    const exercises = await this.exerciseModel.find({});
    return exercises.filter((exercise: Exercise) => exercise.user.length == 0 || exercise.user.filter((user) => user["_id"] == id));
  }

  async findOne(id: string): Promise<Exercise> {
    return this.exerciseModel.findById(id, { __v: 0 });
  }

  async updateExercise(userId: string, exerciseId: string, exercise: Partial<Exercise>): Promise<Exercise> {
    const originalExercise = await this.exerciseModel.findById(exerciseId);
    const updatedExercise = Object.assign(originalExercise, exercise);
    await originalExercise.save();
    return updatedExercise.toObject({ versionKey: false });
  }

  async deleteExercise(userId: string, exerciseId: string): Promise<boolean> {
    const result = await this.exerciseModel.deleteOne({ _id: exerciseId });

    if (result.deletedCount == 0) {
      throw new Error("Exercise not found");
    }

    return true;
  }

  async createExercise(id: string, exercise: Partial<Exercise>): Promise<Exercise> {
    const newExercise = new this.exerciseModel(exercise);
    newExercise.user.push(await this.userService.findOne(id));
    await newExercise.save();

    return newExercise.toObject({ versionKey: false });
  }
}
