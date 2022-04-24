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
import { SampleDto } from './sample.dto';
import { Sample } from './sample.entity';
import { SampleService } from './sample.service';

@Controller('samples')
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Get()
  async getAllSamples() {
    return await this.sampleService.findAll();
  }

  @Get(':rowKey')
  async getSample(@Param('rowKey') rowKey) {
    try {
      return await this.sampleService.find(rowKey, new Sample());
    } catch (error) {
      // Entity not found
      throw new NotFoundException(error);
    }
  }

  @Post()
  async createSample(
    @Body()
    sampleData: SampleDto,
  ) {
    try {
      const sample = new Sample();
      // Disclaimer: Assign only the properties you are expecting!
      Object.assign(sample, sampleData);

      return await this.sampleService.create(sample);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  @Put(':rowKey')
  async saveSample(@Param('rowKey') rowKey, @Body() sampleData: SampleDto) {
    try {
      const sample = new Sample();
      // Disclaimer: Assign only the properties you are expecting!
      Object.assign(sample, sampleData);

      return await this.sampleService.update(rowKey, sample);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  @Patch(':rowKey')
  async updateSampleDetails(@Param('rowKey') rowKey, @Body() sampleData: Partial<SampleDto>) {
    try {
      const sample = new Sample();
      // Disclaimer: Assign only the properties you are expecting!
      Object.assign(sample, sampleData);

      return await this.sampleService.update(rowKey, sample);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  @Delete(':rowKey')
  async deleteDelete(@Param('rowKey') rowKey) {
    try {
      const response = await this.sampleService.delete(rowKey, new Sample());

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

