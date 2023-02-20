import { AzureTableStorageResponse, AzureTableStorageResultList, InjectRepository, Repository } from '@nestjs/azure-database';
import { Injectable } from '@nestjs/common';
import { Day } from './day.entity';
import { TableQuery } from 'azure-storage';

@Injectable()
export class DayService {
  constructor(
    @InjectRepository(Day)
    private readonly dayRepository: Repository<Day>,
  ) {}

  // find one day entitu by its rowKey
  async find(rowKey: string, day: Day): Promise<Day> {
    return this.dayRepository.find(rowKey, day);
  }

  async findByEmail(email: string): Promise<AzureTableStorageResultList<Day>> {
    const query = new TableQuery();
    return await this.dayRepository.findAll(query.where('email == ?', email));
  }

  // find all day entities
  async findAll(): Promise<AzureTableStorageResultList<Day>> {
    return this.dayRepository.findAll();
  }

  // create a new day entity
  async create(day: Day): Promise<Day> {
    return this.dayRepository.create(day, day.email);
  }

  // update the a day entity by its rowKey
  async update(rowKey: string, day: Partial<Day>): Promise<Day> {
    return this.dayRepository.update(rowKey, day);
  }

  // delete a day entity by its rowKey
  async delete(rowKey: string, day: Day): Promise<AzureTableStorageResponse> {
    return this.dayRepository.delete(rowKey, day);
  }
}
