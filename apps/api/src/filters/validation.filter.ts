import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { ValidationException } from "./validation.exception";

@Catch(ValidationException)
export class ValidationFilter implements ExceptionFilter {
  catch(exception: ValidationException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    return response
      // @ts-ignore
      .status(400)
      .json({
        statusCode: 400,
        timestamp: new Date().toISOString(),
        message: exception.validationErrors,
        path: request.url
      });
  }
}
