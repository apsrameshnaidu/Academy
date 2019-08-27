import { Module } from '@nestjs/common';
import { AcadmeyService } from './acadmey.service';
import { AcadmeyController } from './acadmey.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Acadmey } from './acadmey.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Acadmey])],
  providers: [AcadmeyService],
  controllers: [AcadmeyController],
})
export class AcadmeyModule {}
