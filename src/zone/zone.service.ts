import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateZoneDto } from './dto/create-zone.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Zone } from './entities/zone.entity';
import { Repository } from 'typeorm';
import {v4 as uuid} from 'uuid';

@Injectable()
export class ZoneService {
  constructor(
    @InjectRepository(Zone)
    private readonly zoneRepository: Repository<Zone>
  ){}

  async create(createZoneDto: CreateZoneDto) {
    try {
      const newZone = this.zoneRepository.create({
        id: uuid(),
        ...createZoneDto
      })
      const response = await this.zoneRepository.save(newZone);
      return response;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Cannot create zone');
    }
  }

  async findAll() {
    const zones = await this.zoneRepository.find();
    return zones;
  }

  async findOne(id: string) {
    const zone = await this.zoneRepository.findOneBy({code:+id});
    return zone;
  }  

  async delete(id: string) {
    const zone = await this.zoneRepository.delete({code:+id});
    return zone;
  }  

  async deleteAll(){
    const query = this.zoneRepository.createQueryBuilder('zone');
    try {
      return await query
        .delete()
        .where({})  
        .execute()
    } catch (error) {
      console.log(error);
    }
  }
}
