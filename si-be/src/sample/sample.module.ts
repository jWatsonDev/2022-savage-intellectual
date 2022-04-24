import { Module } from '@nestjs/common';
import { SampleService } from './sample.service';
import { SampleController } from './sample.controller';
import { Sample } from './sample.entity';
import { AzureTableStorageModule } from '@nestjs/azure-database';

@Module({
  imports: [AzureTableStorageModule.forFeature(Sample, {
    table: 'samples',
    createTableIfNotExists: true
  })],
  controllers: [SampleController],
  providers: [SampleService]
})
export class SampleModule {}
