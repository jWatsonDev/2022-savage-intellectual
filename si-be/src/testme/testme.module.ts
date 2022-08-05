import { Module } from '@nestjs/common';
import { TestmeService } from './testme.service';
import { TestmeController } from './testme.controller';

@Module({
  controllers: [TestmeController],
  providers: [TestmeService]
})
export class TestmeModule {}
