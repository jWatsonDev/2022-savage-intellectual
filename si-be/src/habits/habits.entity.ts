import {
  EntityInt32,
  EntityPartitionKey,
  EntityRowKey,
  EntityString
} from '@nestjs/azure-database';

@EntityPartitionKey('UserEmail')
@EntityRowKey('HabitGuid')
export class Habit {
  @EntityString() email: string;
  @EntityString() name: string;
  @EntityString() description: string;
  @EntityString() category: string;
  @EntityString() profileGuid: string;
}
