import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put
} from "@nestjs/common";
import { ExerciseService } from "./exercise.service";
import { InjectToken, Token } from "../auth/token.decorator";
import { Exercise } from "./exercise.schema";

@Controller()
export class ExerciseController {

  constructor(private exercisesService: ExerciseService) {
  }

  @Post()
  async createExercise(@InjectToken() token: Token, @Body() exercise: Exercise): Promise<Exercise> {
    return this.exercisesService.createExercise(token.id, exercise);
  }

  @Get()
  async findAll(@InjectToken() token: Token): Promise<Exercise[]> {
    return this.exercisesService.findAll(token.id);
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Exercise> {
    const exercise = await this.exercisesService.findOne(id);

    if (!exercise) {
      throw new NotFoundException("Could not find exercise with id " + id);
    }

    return exercise;
  }

  @Put(":id")
  async updateExercise(@InjectToken() token: Token, @Param("id") id: string, @Body() exercise: Exercise): Promise<Exercise> {

    if (exercise["_id"]) {
      throw new BadRequestException("You cannot change the id");
    }

    return this.exercisesService.updateExercise(token.id, id, exercise);
  }

  @Delete(":id")
  async deleteExercise(@InjectToken() token: Token, @Param("id") id: string): Promise<boolean> {
    return this.exercisesService.deleteExercise(token.id, id);
  }
}
