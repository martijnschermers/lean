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

  @Get("custom")
  async findAllCustom(@InjectToken() token: Token): Promise<Exercise[]> {
    return this.exercisesService.findAllCustom(token.id);
  }

  @Get("custom/:id")
  async findOneCustom(@InjectToken() token: Token, @Param("id") id: string): Promise<Exercise> {
   return this.exercisesService.findOneCustom(token.id, id);
  }

  @Get()
  async findAllPredefined(): Promise<Exercise[]> {
    return this.exercisesService.findAllPredefined();
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
  async updateExercise(@Param("id") id: string, @Body() exercise: Exercise): Promise<Exercise> {

    if (exercise["_id"]) {
      throw new BadRequestException("You cannot change the id");
    }

    return this.exercisesService.updateExercise(id, exercise);
  }

  @Delete(":id")
  async deleteExercise(@Param("id") id: string): Promise<Exercise> {
    return this.exercisesService.deleteExercise(id);
  }
}
