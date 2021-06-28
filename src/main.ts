import { ExceptionFilter, ArgumentsHost, Catch, Module, BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


@Catch(BadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response : any = ctx.getResponse<Response>();
    const request : any = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      // you can manipulate the response here
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        code: '001'
      });
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true,
    forbidNonWhitelisted : true
  }))
  app.useGlobalFilters(new BadRequestExceptionFilter())
  await app.listen(3000);
}
bootstrap();
