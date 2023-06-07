import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamicModuleModule } from './dynamic-module/dynamic-module.module';
import { ModulBuilderModule } from './module-builder/modul-builder.module';

@Module({
  imports: [
    DynamicModuleModule.register({
      name: 'decade',
      age: 20,
    }),
    // registerAsync 支持异步 也就是 useFactory
    ModulBuilderModule.register({
      name: 'decade',
      age: 20,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
