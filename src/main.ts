import { ValidationError } from '@nestjs/common';
import { ExceptionFilter, ArgumentsHost, Catch, Module, BadRequestException, HttpException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


@Catch(HttpException)
export class HttpExceptionFilter  implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response : any = ctx.getResponse<Response>();
    const request : any = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const message : any =  exception.getResponse();

    response
      .status(status)
      // you can manipulate the response here
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        message : message.message[0],
        code: '001'
      });
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true,
    forbidNonWhitelisted : true,
    transform: true
  }))
  // app.useGlobalFilters(new HttpExceptionFilter ())
  await app.listen(3000);
}
bootstrap();
