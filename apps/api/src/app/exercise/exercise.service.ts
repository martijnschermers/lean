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
    return this.userService.findAllExercises(id);
  }

  async updateExercise(id: string, exercise: Partial<Exercise>): Promise<Exercise> {
    return this.exerciseModel.findByIdAndUpdate(id, exercise, { new: true });
  }

  async deleteExercise(id: string): Promise<Exercise> {
    return this.exerciseModel.findByIdAndDelete(id);
  }

  async createExercise(id: string, exercise: Partial<Exercise>): Promise<Exercise> {
    const newExercise = new this.exerciseModel(exercise);
    await newExercise.save();

    await this.userService.addExercise(id, newExercise);

    return newExercise.toObject({ versionKey: false });
  }

  async findOne(id: string): Promise<Exercise> {
    return this.exerciseModel.findById(id, { __v: 0 });
  }
}
