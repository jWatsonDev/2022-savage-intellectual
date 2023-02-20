import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { HabitModule } from './habits/habits.module';
import { DayModule } from './days/day.module';

@Module({
  imports: [ProfileModule, HabitModule, DayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
