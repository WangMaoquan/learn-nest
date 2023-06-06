import { Module } from '@nestjs/common';
import { TestProviderService } from './test-provider.service';
import { TestProviderController } from './test-provider.controller';

@Module({
  controllers: [TestProviderController],
  providers: [
    {
      provide: TestProviderService, // 提供的token 也可以是字符串
      useClass: TestProviderService,
    }, // 等同于 TestProviderService
  ],
  exports: [TestProviderService],
})
export class TestProviderModule {}
