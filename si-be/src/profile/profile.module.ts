import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { Profile } from './profile.entity';
import { AzureTableStorageModule } from '@nestjs/azure-database';

@Module({
  imports: [AzureTableStorageModule.forFeature(Profile, {
    table: 'profiles',
    createTableIfNotExists: true
  })],
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {}
