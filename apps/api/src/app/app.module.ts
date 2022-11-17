import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExerciseModule } from './exercise/exercise.module';
import { MongooseModule } from "@nestjs/mongoose";
import { environment } from "../environments/environment";
import { WorkoutModule } from './workout/workout.module';
import { GroupWorkoutModule } from './group-workout/group-workout.module';
import { UserModule } from './user/user.module';
import { SetModule } from './set/set.module';

@Module({
  imports: [
    MongooseModule.forRoot(environment.mongoUrl),
    ExerciseModule,
    WorkoutModule,
    GroupWorkoutModule,
    UserModule,
    SetModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
