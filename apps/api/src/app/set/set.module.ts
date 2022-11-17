import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { SetSchema } from "./set.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Set', schema: SetSchema },
    ])
  ]
})
export class SetModule {}
