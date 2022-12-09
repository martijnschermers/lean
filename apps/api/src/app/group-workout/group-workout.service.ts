import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { GroupWorkout } from "./group-workout.schema";
import { InjectModel } from "@nestjs/mongoose";
import { UserService } from "../user/user.service";

@Injectable()
export class GroupWorkoutService {
  constructor(@InjectModel(GroupWorkout.name) private groupWorkoutModel: Model<GroupWorkout>, private userService: UserService) {
  }

  async findAll(): Promise<GroupWorkout[]> {
    return this.groupWorkoutModel.find();
  }

  async findOne(id: string): Promise<GroupWorkout> {
    return this.groupWorkoutModel.findById(id);
  }

  async addGroupWorkout(groupWorkout: GroupWorkout): Promise<GroupWorkout> {
    const newGroupWorkout = new this.groupWorkoutModel(groupWorkout);
    await newGroupWorkout.save();

    return newGroupWorkout.toObject({ versionKey: false });
  }

  async joinGroupWorkout(userId: string, groupWorkoutId: string): Promise<void> {
    const groupWorkout = await this.groupWorkoutModel.findById(groupWorkoutId);
    await this.userService.addGroupWorkout(userId, groupWorkout);
  }
}
