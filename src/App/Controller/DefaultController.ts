import { Controller, Get } from '@nestjs/common';
import { AppService } from '../Service/AppService';

@Controller()
export class DefaultController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
