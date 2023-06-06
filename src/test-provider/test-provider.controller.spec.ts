import { Test, TestingModule } from '@nestjs/testing';
import { TestProviderController } from './test-provider.controller';
import { TestProviderService } from './test-provider.service';

describe('TestProviderController', () => {
  let controller: TestProviderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestProviderController],
      providers: [TestProviderService],
    }).compile();

    controller = module.get<TestProviderController>(TestProviderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
