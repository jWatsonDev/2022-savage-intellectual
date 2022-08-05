import { Test, TestingModule } from '@nestjs/testing';
import { TestmeController } from './testme.controller';
import { TestmeService } from './testme.service';

describe('TestmeController', () => {
  let controller: TestmeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestmeController],
      providers: [TestmeService],
    }).compile();

    controller = module.get<TestmeController>(TestmeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
