import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { Neo4jService } from "nest-neo4j/dist";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private neoService: Neo4jService) {}

  @Get()
  getData() {
    return this.neoService.read('MATCH (n) RETURN n LIMIT 25');
  }
}
