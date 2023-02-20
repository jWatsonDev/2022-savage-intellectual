import { Module } from '@nestjs/common';
import { DayService } from './day.service';
import { DayController } from './day.controller';
import { Day } from './day.entity';
import { AzureTableStorageModule } from '@nestjs/azure-database';

@Module({
  imports: [AzureTableStorageModule.forFeature(Day, {
    table: 'days',
    createTableIfNotExists: true
  })],
  controllers: [DayController],
  providers: [DayService]
})
export class DayModule {}
