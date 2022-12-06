import { Controller, Get } from "@nestjs/common";
import { GroupWorkout } from "./group-workout.schema";
import { GroupWorkoutService } from "./group-workout.service";

@Controller()
export class GroupWorkoutController {
  constructor(private groupWorkoutService: GroupWorkoutService) {
  }

  @Get()
  async findAll(): Promise<GroupWorkout[]> {
    return this.groupWorkoutService.findAll();
  }
}
