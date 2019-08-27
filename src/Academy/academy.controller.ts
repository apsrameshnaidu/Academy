import { Controller, Get } from '@nestjs/common';
import { AcademyService } from './academy.service';
import { Academy } from './academy.entity';

@Controller('academy')
export class AcademyController {
  constructor(private readonly academyService: AcademyService) {}

  @Get()
  findAll(): Promise<Academy[]> {
    return this.academyService.findAll();
  }
}

/////////[TypeOrmModule] Unable to connect to the database./////////