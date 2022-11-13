import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";

@Catch()
export class FallbackExceptionFilter implements ExceptionFilter {
 catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    return response
      .status(500)
      .json({
        statusCode: 500,
        timestamp: new Date().toISOString(),
        message: exception.message ? exception.message : 'Internal server error',
        path: request.url,
      });
 }
}
