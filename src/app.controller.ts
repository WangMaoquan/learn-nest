import { TestService } from './test/test.service';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 代表这个 controller 也是可以注入的
/**
 * 为啥 一个用的 service 用的Injectable, controller 用的 Controller 呢?
 * Service 是可以被注入也是可以注入到别的对象的
 * Controller 只需要被注入
 */

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly testService: TestService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello() + this.testService.findAll();
  }
}
