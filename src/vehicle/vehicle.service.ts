import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { User } from 'src/user/entities/user.entity';


@Injectable()
export class VehicleService {

  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  async create(createVehicleDto: CreateVehicleDto) {    
    const user = await this.userRepository.findOneBy({id: createVehicleDto.userId});

    if(user){
      try {
        const vehicle = this.vehicleRepository.create({id: uuid(),...createVehicleDto});
        vehicle.user = user;
        return this.vehicleRepository.save(vehicle)    
      } catch (error) {
        console.log(error);
      }
    }
  }

  findAll() {
    return `This action returns all vehicle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicle`;
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return `This action updates a #${id} vehicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicle`;
  }
}
