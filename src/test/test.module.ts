import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';

@Module({
  controllers: [TestController],
  providers: [TestService],
  exports: [TestService], // 如果没有导出 TestService , 我们就不能在 app Controller 中使用
})
export class TestModule {}
