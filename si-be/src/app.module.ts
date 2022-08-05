import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleModule } from './sample/sample.module';
import { TestmeModule } from './testme/testme.module';
import { HelloWorldController } from './hello-world/hello-world.controller';

@Module({
  imports: [SampleModule, TestmeModule],
  controllers: [AppController, HelloWorldController],
  providers: [AppService],
})
export class AppModule {}
