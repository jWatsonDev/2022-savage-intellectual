import { AzureTableStorageResponse, AzureTableStorageResultList, InjectRepository, Repository } from '@nestjs/azure-database';
import { Injectable } from '@nestjs/common';
import { Habit } from './habits.entity';
import { TableQuery } from 'azure-storage';

@Injectable()
export class HabitService {
  constructor(
    @InjectRepository(Habit)
    private readonly habitRepository: Repository<Habit>,
  ) {}

  // find one habit entitu by its rowKey
  async find(rowKey: string, habit: Habit): Promise<Habit> {
    return this.habitRepository.find(rowKey, habit);
  }

  async findByEmail(email: string): Promise<AzureTableStorageResultList<Habit>> {
    const query = new TableQuery();
    return await this.habitRepository.findAll(query.where('email == ?', email));
  }

  // find all habit entities
  async findAll(): Promise<AzureTableStorageResultList<Habit>> {
    return this.habitRepository.findAll();
  }

  // create a new habit entity
  async create(habit: Habit): Promise<Habit> {
    return this.habitRepository.create(habit, habit.email);
  }

  // update the a habit entity by its rowKey
  async update(rowKey: string, habit: Partial<Habit>): Promise<Habit> {
    return this.habitRepository.update(rowKey, habit);
  }

  // delete a habit entity by its rowKey
  async delete(rowKey: string, habit: Habit): Promise<AzureTableStorageResponse> {
    return this.habitRepository.delete(rowKey, habit);
  }
}
