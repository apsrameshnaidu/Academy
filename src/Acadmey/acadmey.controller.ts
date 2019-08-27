import { Controller, Get } from '@nestjs/common';
import { AcadmeyService } from './acadmey.service';
import { Acadmey } from './acadmey.entity';

@Controller('acadmey')
export class AcadmeyController {
  constructor(private readonly acadmeyService: AcadmeyService) {}

  @Get()
  findAll(): Promise<Acadmey[]> {
    return this.acadmeyService.findAll();
  }
}

/////////[TypeOrmModule] Unable to connect to the database./////////