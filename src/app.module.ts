import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';

// 通过 @Module 声明模块
@Module({
  imports: [TestModule], // 当 import 别的模块后，那个模块 exports 中的内容 就可以在当前模块注入了
  controllers: [AppController], // 只能被注入的放入controller
  providers: [AppService], // 可以被注入，也可以注入别的对象
  exports: [], // 导出 [] 中的模块
})
export class AppModule {}
