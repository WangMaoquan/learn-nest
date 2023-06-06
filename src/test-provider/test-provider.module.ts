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
    {
      provide: 'decade',
      // 除了使用 useClass 还可以是用 useValue 注入一个值
      useValue: {
        name: 'decade',
        age: 20,
      },
    },
    {
      provide: 'decade1',
      // 也可以是用 useFactory 就不用返回同一个对象了, 该方法也支持异步
      useFactory() {
        return {
          name: 'decade1',
          age: 20,
        };
      },
    },
    {
      provide: 'decade2',
      // 使用传参的话 还需要 配合 inject
      useFactory(person: { name: string }, app: TestProviderService) {
        return {
          name: person.name,
          age: app.getAge(),
        };
      },
      inject: ['person', TestProviderService],
    },
    {
      provide: 'decade3',
      // 使用别名
      useExisting: 'decade1',
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
