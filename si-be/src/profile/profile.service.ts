import { AzureTableStorageResponse, AzureTableStorageResultList, InjectRepository, Repository } from '@nestjs/azure-database';
import { Injectable } from '@nestjs/common';
import { Profile } from './profile.entity';
import { TableQuery } from 'azure-storage';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  // find one profile entity by its rowKey/email
  async find(rowKey: string, profile: Profile): Promise<Profile> {
    return this.profileRepository.find(rowKey, profile);
  }

  async findByEmail(email: string): Promise<AzureTableStorageResultList<Profile>> {
    const query = new TableQuery();
    return await this.profileRepository.findAll(query.where('email == ?', email));
  }

  // find all profile entities
  async findAll(): Promise<AzureTableStorageResultList<Profile>> {
    return this.profileRepository.findAll();
  }

  // create a new profile entity
  async create(profile: Profile): Promise<Profile> {
    // set email as rowKey
    return this.profileRepository.create(profile, profile.email);
  }

  // update the a profile entity by its rowKey
  async update(rowKey: string, profile: Partial<Profile>): Promise<Profile> {
    return this.profileRepository.update(rowKey, profile);
  }

  // delete a profile entity by its rowKey
  async delete(rowKey: string, profile: Profile): Promise<AzureTableStorageResponse> {
    return this.profileRepository.delete(rowKey, profile);
  }
}
