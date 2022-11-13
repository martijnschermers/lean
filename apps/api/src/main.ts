/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationError, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app/app.module";
import { HttpExceptionFilter } from "./filters/http.filter";
import { FallbackExceptionFilter } from "./filters/fallback.filter";
import { ValidationFilter } from "./filters/validation.filter";
import { ValidationException } from "./filters/validation.exception";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = "api";
  const port = process.env.PORT || 3333;

  app.setGlobalPrefix(globalPrefix);
  app.useGlobalFilters(
    new FallbackExceptionFilter(),
    new HttpExceptionFilter(),
    new ValidationFilter()
  );
  app.useGlobalPipes(new ValidationPipe({
    skipMissingProperties: true,
    exceptionFactory: (errors: ValidationError[]) => {
      const messages = errors.map(error =>
        `Property ${error.property} has invalid value ${error.value},
        ${Object.values(error.constraints).join(', ')}`
      );

      return new ValidationException(messages);
    }
  }));

  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
