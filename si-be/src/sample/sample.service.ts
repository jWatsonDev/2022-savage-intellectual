import { AzureTableStorageResponse, AzureTableStorageResultList, InjectRepository, Repository } from '@nestjs/azure-database';
import { Injectable } from '@nestjs/common';
import { Sample } from './sample.entity';

@Injectable()
export class SampleService {
  constructor(
    @InjectRepository(Sample)
    private readonly sampleRepository: Repository<Sample>,
  ) {}

  // find one sample entitu by its rowKey
  async find(rowKey: string, sample: Sample): Promise<Sample> {
    return this.sampleRepository.find(rowKey, sample);
  }

  // find all sample entities
  async findAll(): Promise<AzureTableStorageResultList<Sample>> {
    return this.sampleRepository.findAll();
  }

  // create a new sample entity
  async create(sample: Sample): Promise<Sample> {
    return this.sampleRepository.create(sample);
  }

  // update the a sample entity by its rowKey
  async update(rowKey: string, sample: Partial<Sample>): Promise<Sample> {
    return this.sampleRepository.update(rowKey, sample);
  }

  // delete a sample entity by its rowKey
  async delete(rowKey: string, sample: Sample): Promise<AzureTableStorageResponse> {
    return this.sampleRepository.delete(rowKey, sample);
  }
}
