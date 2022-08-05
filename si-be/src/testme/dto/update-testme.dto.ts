import { PartialType } from '@nestjs/mapped-types';
import { CreateTestmeDto } from './create-testme.dto';

export class UpdateTestmeDto extends PartialType(CreateTestmeDto) {}
