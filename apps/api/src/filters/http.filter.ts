import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    return response
      // @ts-ignore
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        message: exception.getResponse()["message"],
        path: request.url,
      });
  }
}
