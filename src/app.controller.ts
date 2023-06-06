import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { TestProviderService } from './test-provider/test-provider.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Inject('test-provider-service')
  private readonly tPS: TestProviderService;

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    return this.tPS.getInfo();
  }
}
