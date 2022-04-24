import {
  EntityInt32,
  EntityPartitionKey,
  EntityRowKey,
  EntityString
} from '@nestjs/azure-database';

@EntityPartitionKey('SampleID')
@EntityRowKey('SampleName')
export class Sample {
  @EntityString() name: string;
  @EntityString() desc: string;
}
