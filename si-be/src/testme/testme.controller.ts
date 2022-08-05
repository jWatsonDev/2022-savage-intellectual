import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestmeService } from './testme.service';
import { CreateTestmeDto } from './dto/create-testme.dto';
import { UpdateTestmeDto } from './dto/update-testme.dto';

@Controller('testme')
export class TestmeController {
  constructor(private readonly testmeService: TestmeService) {}

  @Post()
  create(@Body() createTestmeDto: CreateTestmeDto) {
    return this.testmeService.create(createTestmeDto);
  }

  @Get()
  findAll() {
    return this.testmeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testmeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestmeDto: UpdateTestmeDto) {
    return this.testmeService.update(+id, updateTestmeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testmeService.remove(+id);
  }
}
