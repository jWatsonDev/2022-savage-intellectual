export class HabitDto {
  email: string; // Key Attr: Query by Email/Partition Key to get all habits associated with user 
  name: string;
  description: string;
  category: string;
  profileGuid: string;
}