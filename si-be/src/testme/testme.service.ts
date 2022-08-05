import { Injectable } from '@nestjs/common';
import { CreateTestmeDto } from './dto/create-testme.dto';
import { UpdateTestmeDto } from './dto/update-testme.dto';

@Injectable()
export class TestmeService {
  create(createTestmeDto: CreateTestmeDto) {
    return 'This action adds a new testme';
  }

  findAll() {
    return `This action returns all testme`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testme`;
  }

  update(id: number, updateTestmeDto: UpdateTestmeDto) {
    return `This action updates a #${id} testme`;
  }

  remove(id: number) {
    return `This action removes a #${id} testme`;
  }
}
