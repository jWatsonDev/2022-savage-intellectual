import { Module } from '@nestjs/common';
import { HabitService } from './habits.service';
import { HabitController } from './habits.controller';
import { Habit } from './habits.entity';
import { AzureTableStorageModule } from '@nestjs/azure-database';

@Module({
  imports: [AzureTableStorageModule.forFeature(Habit, {
    table: 'habits',
    createTableIfNotExists: true
  })],
  controllers: [HabitController],
  providers: [HabitService]
})
export class HabitModule {}
