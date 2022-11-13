import { Injectable } from "@nestjs/common";
import { Exercise } from "@lean/api-interfaces";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class ExercisesService {

  constructor(@InjectModel("Exercise") private exerciseModel: Model<Exercise>) {
  }

  async findAll(): Promise<Exercise[]> {
    return this.exerciseModel.find({}, { __v: 0 });
  }

  async updateExercise(id: string, exercise: Partial<Exercise>): Promise<Exercise> {
    return this.exerciseModel.findByIdAndUpdate(id, exercise, { new: true });
  }

  async deleteExercise(id: string): Promise<Exercise> {
    return this.exerciseModel.findByIdAndDelete(id);
  }

  async createExercise(exercise: Partial<Exercise>): Promise<Exercise> {
    const newExercise = new this.exerciseModel(exercise);

    await newExercise.save();

    return newExercise.toObject({ versionKey: false });
  }

  async findOne(id: string): Promise<Exercise> {
    return this.exerciseModel.findOne({ _id: id }, { __v: 0 });
  }
}
