import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Neo4jModule } from "nest-neo4j/dist";

@Module({
  imports: [
    Neo4jModule.forRoot({
      scheme: "neo4j+s",
      host: process.env.NEO4J_HOST,
      port: 7687,
      username: process.env.NEO4J_USERNAME,
      password: process.env.NEO4J_PASSWORD,
    }),
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
