import { Controller, Get, Inject } from '@nestjs/common';
import { MODULE_OPTIONS_TOKEN, ModuleBuilderOptions } from './module-builder';

@Controller('module-builder')
export class ModuleBuilderController {
  @Inject(MODULE_OPTIONS_TOKEN) private options: ModuleBuilderOptions;

  @Get()
  getOptions() {
    return this.options;
  }
}
