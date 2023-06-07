import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './module-builder';
import { ModuleBuilderController } from './module-builder.controller';

@Module({
  controllers: [ModuleBuilderController],
})
export class ModulBuilderModule extends ConfigurableModuleClass {}
