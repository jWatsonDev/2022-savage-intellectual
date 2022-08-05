import { Controller, Get } from '@nestjs/common';

@Controller('hello-world')
export class HelloWorldController {

  @Get('hello')
  helloWorld(): string {
    return "Hello, world. Testing pipeline.";
  }
}
