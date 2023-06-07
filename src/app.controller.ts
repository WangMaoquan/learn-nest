import {
  Controller,
  Get,
  MiddlewareConsumer,
  NestModule,
} from '@nestjs/common';
import { AppService } from './app.service';
import { TestMiddlewareMiddleware } from './middleware/test-middleware.middleware';

@Controller()
export class AppController implements NestModule {
  constructor(private readonly appService: AppService) {}

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TestMiddlewareMiddleware).forRoutes('*');
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
