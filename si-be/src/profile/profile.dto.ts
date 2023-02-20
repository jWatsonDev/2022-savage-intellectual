export class ProfileDto {
  firstName: string;
  lastName: string;
  email: string;
  currentStreak: string; // TODO: send in as object and have service update to Table Storage format (see entity)
}