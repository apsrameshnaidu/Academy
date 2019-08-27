import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Academy } from './academy.entity';

@Injectable()
export class AcademyService {
  constructor(
    @InjectRepository(Academy)
    private readonly academyRepository: Repository<Academy>,
  ) {}

  async findAll(): Promise<Academy[]> {
    return await this.academyRepository.find();
  }
}
 
