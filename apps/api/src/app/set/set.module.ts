import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { Set, SetSchema } from "./set.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Set.name, schema: SetSchema },
    ])
  ]
})
export class SetModule {}
