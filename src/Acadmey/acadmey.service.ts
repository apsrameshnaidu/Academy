import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Acadmey } from './acadmey.entity';

@Injectable()
export class AcadmeyService {
  constructor(
    @InjectRepository(Acadmey)
    private readonly acadmeyRepository: Repository<Acadmey>,
  ) {}

  async findAll(): Promise<Acadmey[]> {
    return await this.acadmeyRepository.find();
  }
}
