import {
  EntityInt32,
  EntityPartitionKey,
  EntityRowKey,
  EntityString
} from '@nestjs/azure-database';

@EntityPartitionKey('DayID')
@EntityRowKey('DayEmail')
export class Day {
  @EntityString() firstName: string;
  @EntityString() lastName: string;
  @EntityString() email: string;
}
