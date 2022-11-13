import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExercisesModule } from './exercises/exercises.module';
import { MongooseModule } from "@nestjs/mongoose";
import { environment } from "../environments/environment";

@Module({
  imports: [
    ExercisesModule,
    MongooseModule.forRoot(environment.mongoUrl)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
