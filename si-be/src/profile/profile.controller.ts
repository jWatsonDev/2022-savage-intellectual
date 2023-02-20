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
import { ProfileDto } from './profile.dto';
import { Profile } from './profile.entity';
import { ProfileService } from './profile.service';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  async getAllProfiles() {
    return await this.profileService.findAll();
  }

  @Get('email')
  async findByEmail(@Param('email') email) {
    return await this.profileService.findByEmail(email);
  }

  @Get(':rowKey')
  async getProfile(@Param('rowKey') rowKey) {
    try {
      return await this.profileService.find(rowKey, new Profile());
    } catch (error) {
      // Entity not found
      throw new NotFoundException(error);
    }
  }

  @Post()
  async createProfile(
    @Body()
    profileData: ProfileDto,
  ) {
    try {
      const profile = new Profile();
      // Disclaimer: Assign only the properties you are expecting!
      Object.assign(profile, profileData);

      return await this.profileService.create(profile);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  @Put(':rowKey')
  async saveProfile(@Param('rowKey') rowKey, @Body() profileData: ProfileDto) {
    try {
      const profile = new Profile();
      // Disclaimer: Assign only the properties you are expecting!
      Object.assign(profile, profileData);

      return await this.profileService.update(rowKey, profile);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  @Patch(':rowKey')
  async updateProfileDetails(@Param('rowKey') rowKey, @Body() profileData: Partial<ProfileDto>) {
    try {
      const profile = new Profile();
      // Disclaimer: Assign only the properties you are expecting!
      Object.assign(profile, profileData);

      return await this.profileService.update(rowKey, profile);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  @Delete(':rowKey')
  async deleteDelete(@Param('rowKey') rowKey) {
    try {
      const response = await this.profileService.delete(rowKey, new Profile());

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

