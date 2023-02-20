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
import { DayDto } from './day.dto';
import { Day } from './day.entity';
import { DayService } from './day.service';

@Controller('days')
export class DayController {
  constructor(private readonly dayService: DayService) {}

  @Get()
  async getAllDays() {
    return await this.dayService.findAll();
  }

  @Get('email')
  async findByEmail(@Param('email') email) {
    return await this.dayService.findByEmail(email);
  }

  @Get(':rowKey')
  async getDay(@Param('rowKey') rowKey) {
    try {
      return await this.dayService.find(rowKey, new Day());
    } catch (error) {
      // Entity not found
      throw new NotFoundException(error);
    }
  }

  @Post()
  async createDay(
    @Body()
    dayData: DayDto,
  ) {
    try {
      const day = new Day();
      // Disclaimer: Assign only the properties you are expecting!
      Object.assign(day, dayData);

      return await this.dayService.create(day);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  @Put(':rowKey')
  async saveDay(@Param('rowKey') rowKey, @Body() dayData: DayDto) {
    try {
      const day = new Day();
      // Disclaimer: Assign only the properties you are expecting!
      Object.assign(day, dayData);

      return await this.dayService.update(rowKey, day);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  @Patch(':rowKey')
  async updateDayDetails(@Param('rowKey') rowKey, @Body() dayData: Partial<DayDto>) {
    try {
      const day = new Day();
      // Disclaimer: Assign only the properties you are expecting!
      Object.assign(day, dayData);

      return await this.dayService.update(rowKey, day);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  @Delete(':rowKey')
  async deleteDelete(@Param('rowKey') rowKey) {
    try {
      const response = await this.dayService.delete(rowKey, new Day());

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

