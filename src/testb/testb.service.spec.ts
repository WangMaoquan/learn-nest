import { Test, TestingModule } from '@nestjs/testing';
import { TestbService } from './testb.service';

describe('TestbService', () => {
  let service: TestbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestbService],
    }).compile();

    service = module.get<TestbService>(TestbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
