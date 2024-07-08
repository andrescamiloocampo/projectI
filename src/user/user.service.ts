import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import {v4 as uuid} from 'uuid'

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  private readonly users = [
    {
      id: '1',
      username: 'John',
      password: 'pass'
    },
    {
      id: '2',
      username: 'maria',
      password: 'pass'
    }
  ]
  
  findAll(): Promise<User[]> {
    return this.userRepository.find();    
  }  
  
  findOne(id: string): Promise<User> {
    return this.userRepository.findOneBy({id})
  }

  async create(createUserDto:CreateUserDto){
    try {
      const user = this.userRepository.create({id: uuid(),...createUserDto});
      await this.userRepository.save(user);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Cannot create user');
    }    
  }

  async remove(id: number): Promise<void>{
    await this.userRepository.delete(id)
  }
}
