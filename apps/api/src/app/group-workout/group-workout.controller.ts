import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { GroupWorkout } from "./group-workout.schema";
import { GroupWorkoutService } from "./group-workout.service";
import { InjectToken, Token } from "../auth/token.decorator";

@Controller()
export class GroupWorkoutController {
  constructor(private groupWorkoutService: GroupWorkoutService) {
  }

  @Get()
  async findAll(): Promise<GroupWorkout[]> {
    return this.groupWorkoutService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<GroupWorkout> {
    return this.groupWorkoutService.findOne(id);
  }

  @Post()
  async addGroupWorkout(@Body() groupWorkout: GroupWorkout): Promise<GroupWorkout> {
    return this.groupWorkoutService.addGroupWorkout(groupWorkout);
  }

  @Post(":id/join")
  async joinGroupWorkout(@InjectToken() token: Token, @Param("id") id: string): Promise<void> {
    await this.groupWorkoutService.joinGroupWorkout(token.id, id);
  }
}
