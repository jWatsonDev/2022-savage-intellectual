import {
  EntityPartitionKey,
  EntityRowKey,
  EntityString
} from '@nestjs/azure-database';

@EntityPartitionKey('ProfileID')
@EntityRowKey('ProfileEmail')
export class Profile {
  @EntityString() firstName: string;
  @EntityString() lastName: string;
  @EntityString() email: string;
  @EntityString() currentStreak: string; // CSV of Guid_Streak | e.g. HabitGuid_3, HabitGuid_7, etc.
  
}
