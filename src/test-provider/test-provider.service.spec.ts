import { Test, TestingModule } from '@nestjs/testing';
import { TestProviderService } from './test-provider.service';

describe('TestProviderService', () => {
  let service: TestProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestProviderService],
    }).compile();

    service = module.get<TestProviderService>(TestProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
