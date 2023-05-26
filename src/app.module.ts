import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleAModule } from './module-a/module-a.module';
import { ModuleBModule } from './module-b/module-b.module';
import { BController } from './b/b/b.controller';
import { BController as BController1 } from './b/b.controller';
import { BService } from './b/b.service';
import { TestbService } from './testb/testb.service';
import { TestResModule } from './test-res/test-res.module';

@Module({
  imports: [ModuleAModule, ModuleBModule, TestResModule],
  controllers: [AppController, BController, BController1],
  providers: [AppService, BService, TestbService],
})
export class AppModule {}
