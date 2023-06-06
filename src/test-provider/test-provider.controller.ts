import { Controller, Get, Inject } from '@nestjs/common';
import { TestProviderService } from './test-provider.service';

@Controller('test-provider')
export class TestProviderController {
  // 可以不使用构造器注入 也可以使用属性注入
  // constructor(private readonly testProviderService: TestProviderService) {}
  // @Inject(TestProviderService) // 属性注入
  @Inject('test-provider-service')
  private readonly testProviderService: TestProviderService;
  @Get()
  getFileInfo() {
    return this.testProviderService.getInfo();
  }
}
