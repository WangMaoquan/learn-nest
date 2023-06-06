import { Controller, Get, Inject } from '@nestjs/common';
import { TestProviderService } from './test-provider.service';

@Controller('test-provider')
export class TestProviderController {
  // 可以不使用构造器注入 也可以使用属性注入
  // constructor(private readonly testProviderService: TestProviderService) {}
  // @Inject(TestProviderService) // 属性注入
  @Inject('test-provider-service')
  private readonly testProviderService: TestProviderService;

  @Inject('decade')
  private readonly person: { name: string; age: number };

  @Inject('decade1')
  private readonly person1: { name: string; age: number };
  @Inject('decade2')
  private readonly person2: { name: string; age: number };

  @Get()
  getFileInfo() {
    return this.testProviderService.getInfo();
  }

  @Get()
  getName() {
    return this.testProviderService.getPersonInfo(this.person);
  }

  @Get()
  getNmae1() {
    return this.testProviderService.getPersonInfo(this.person1);
  }
}
