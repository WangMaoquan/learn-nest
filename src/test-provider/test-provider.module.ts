import { Module } from '@nestjs/common';
import { TestProviderService } from './test-provider.service';
import { TestProviderController } from './test-provider.controller';

@Module({
  controllers: [TestProviderController],
  providers: [
    // {
    //   provide: TestProviderService, // 提供的token 也可以是字符串
    //   useClass: TestProviderService,
    // }, // 等同于 TestProviderService
    {
      provide: 'test-provider-service', // 使用 字符串的 token 的话, exports 也要使用 {provide, useClass} 这样的形式
      useClass: TestProviderService,
    },
  ],
  exports: [
    {
      provide: 'test-provider-service',
      useClass: TestProviderService,
    },
  ],
})
export class TestProviderModule {}
