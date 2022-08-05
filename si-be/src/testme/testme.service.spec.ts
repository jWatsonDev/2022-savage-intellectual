import { Test, TestingModule } from '@nestjs/testing';
import { TestmeService } from './testme.service';

describe('TestmeService', () => {
  let service: TestmeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestmeService],
    }).compile();

    service = module.get<TestmeService>(TestmeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
