import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UnprocessableEntityException,
  NotFoundException,
  Patch
} from '@nestjs/common';
import { HabitDto } from './habits.dto';
import { Habit } from './habits.entity';
import { HabitService } from './habits.service';

@Controller('habits')
export class HabitController {
  constructor(private readonly habitService: HabitService) {}

  @Get()
  async getAllHabits() {
    return await this.habitService.findAll();
  }

  @Get('email')
  async findByEmail(@Param('email') email) {
    return await this.habitService.findByEmail(email);
  }

  @Get(':rowKey')
  async getHabit(@Param('rowKey') rowKey) {
    try {
      return await this.habitService.find(rowKey, new Habit());
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Post()
  async createHabit(
    @Body()
    habitData: HabitDto,
  ) {
    try {
      const habit = new Habit();
      // Disclaimer: Assign only the properties you are expecting!
      Object.assign(habit, habitData);

      return await this.habitService.create(habit);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  @Put(':rowKey')
  async saveHabit(@Param('rowKey') rowKey, @Body() habitData: HabitDto) {
    try {
      const habit = new Habit();
      // Disclaimer: Assign only the properties you are expecting!
      Object.assign(habit, habitData);

      return await this.habitService.update(rowKey, habit);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  @Patch(':rowKey')
  async updateHabitDetails(@Param('rowKey') rowKey, @Body() habitData: Partial<HabitDto>) {
    try {
      const habit = new Habit();
      // Disclaimer: Assign only the properties you are expecting!
      Object.assign(habit, habitData);

      return await this.habitService.update(rowKey, habit);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  @Delete(':rowKey')
  async deleteDelete(@Param('rowKey') rowKey) {
    try {
      const response = await this.habitService.delete(rowKey, new Habit());

      if (response.statusCode === 204) {
        return null;
      } else {
        throw new UnprocessableEntityException(response);
      }
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}

