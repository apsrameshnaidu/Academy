import { Module } from '@nestjs/common';
import { AcademyService } from './academy.service';
import { AcademyController } from './academy.controller';
 
@Module({
  providers: [AcademyService],
  controllers: [AcademyController],
})
export class AcademyModule {}

//This module uses forFeature() method to define which repositories shall be registered in the current scope to inject the AcademyRepository to the AcademyService using the @InjectRepository() decorator
