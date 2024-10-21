import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User, Location,File } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import {v4 as uuid} from 'uuid';
import * as bcrypt from 'bcrypt';
import { CreateFileDto } from './dto';
@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(File)
    private readonly fileRepository: Repository<File>,
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>
  ){}

  findAll(): Promise<User[]> {
    return this.userRepository.find();    
  }  
  
  async findOne(id: string): Promise<any> {
    const user = this.userRepository.findOneBy({id})    
    return user;
  }

  async findOneByUsername(username: string): Promise<any> {
    const user = await this.userRepository.findOneBy({ username }); // Espera la promesa
    if (!user) return null;
  
    //const { password, ...userResp } = user; // error 500 server error
    return user; 
  }
  

  async create(createUserDto: CreateUserDto) {
    const { password, ...userData } = createUserDto;
    const { file, location, ...rest } = userData;
  
    try {

      const newFile = this.fileRepository.create({
        id: uuid(),
        ...file,
      });
      const savedFile = await this.fileRepository.save(newFile);
  
      const newLocation = this.locationRepository.create({
        id: uuid(),
        ...location,
      });
      const savedLocation = await this.locationRepository.save(newLocation);
  
    
      const user = this.userRepository.create({
        id: uuid(),
        password: bcrypt.hashSync(password, 10),
        file: savedFile, 
        location: savedLocation, 
        ...rest,
      });
  
      
      const response = await this.userRepository.save(user);
  
      const { password: passw, ...userResponse } = response;
      return userResponse;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Cannot create user');
    }
  }

  async remove(id: number): Promise<void>{
    await this.userRepository.delete(id)
  }  


}
