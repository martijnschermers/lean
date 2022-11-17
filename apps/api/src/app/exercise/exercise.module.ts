import { Module } from '@nestjs/common';
import { ExerciseController } from './exercise.controller';
import { ExerciseService } from './exercise.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ExerciseSchema } from "./exercise.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Exercise', schema: ExerciseSchema },
    ])
  ],
  controllers: [ExerciseController],
  providers: [ExerciseService]
})
export class ExerciseModule {}
