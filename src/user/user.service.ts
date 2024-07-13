import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import {v4 as uuid} from 'uuid';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  findAll(): Promise<User[]> {
    return this.userRepository.find();    
  }  
  
  async findOne(id: string): Promise<any> {
    const user = this.userRepository.findOneBy({id})    
    return user;
  }

  async findOneByUsername(username: string): Promise<any> {
    const user = this.userRepository.findOneBy({username});
    const resp = await user
    if(!resp) return null;
    return user;
  }

  async create(createUserDto:CreateUserDto){
    const {password,...userData} = createUserDto
    try {
      const user = this.userRepository.create({
        id: uuid(),
        password: bcrypt.hashSync(password,10),
        ...userData
      });
      const response = await this.userRepository.save(user);
      console.log({response})
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Cannot create user');
    }    
  }

  async remove(id: number): Promise<void>{
    await this.userRepository.delete(id)
  }  
}
