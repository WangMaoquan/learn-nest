import { Test, TestingModule } from '@nestjs/testing';
import { ModuleBuilderController } from './module-builder.controller';

describe('ModuleBuilderController', () => {
  let controller: ModuleBuilderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModuleBuilderController],
    }).compile();

    controller = module.get<ModuleBuilderController>(ModuleBuilderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
