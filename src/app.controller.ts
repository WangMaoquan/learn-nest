import { Controller, Get, SetMetadata, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomDecorator } from './custom-decorator.decorator';
import { applyDecorator } from './apply-decorator.decorator';
import { TestDecade } from './ParamsDecorator';
import { TestGuardGuard } from './test-guard.guard';
import { CustomDecade } from './ClassDecorator';

@CustomDecade()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @SetMetadata('custom-decorator', 'admin')
  @UseGuards(TestGuardGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello1')
  @CustomDecorator('admin') // 相当于 @SetMetadata('custom-decorator', 'admin')
  @UseGuards(TestGuardGuard)
  getHello1(): string {
    return this.appService.getHello();
  }

  // 是不是 一堆装饰太多了, 我们也可以自定义
  // 在自定义装饰器里通过 applyDecorators 调用其他装饰器
  @applyDecorator('/hello2', 'admin')
  getHello2(): string {
    return this.appService.getHello();
  }

  // 使用参数装饰器
  @Get('/hello3')
  // 这里的 decade 就是 TestDecade 的返回值
  getHello3(@TestDecade() decade) {
    return decade;
  }
}
