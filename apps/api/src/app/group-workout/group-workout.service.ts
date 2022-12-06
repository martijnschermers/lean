import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { GroupWorkout } from "./group-workout.schema";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class GroupWorkoutService {
  constructor(@InjectModel(GroupWorkout.name) private groupWorkoutModel: Model<GroupWorkout>) {
  }

  async findAll(): Promise<GroupWorkout[]> {
    return this.groupWorkoutModel.find();
  }
}
