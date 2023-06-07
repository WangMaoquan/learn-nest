import { DynamicModule, Module } from '@nestjs/common';
import { DynamicModuleService } from './dynamic-module.service';
import { DynamicModuleController } from './dynamic-module.controller';

@Module({})
export class DynamicModuleModule {
  static register(options: Record<string, any>): DynamicModule {
    return {
      module: DynamicModuleModule,
      controllers: [DynamicModuleController],
      providers: [
        DynamicModuleService,
        {
          provide: 'config_options',
          useValue: options,
        },
      ],
    };
  }
}
