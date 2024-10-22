import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User, Location, File, Prediction } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuid } from 'uuid';
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
    private readonly locationRepository: Repository<Location>,
    @InjectRepository(Prediction)
    private readonly predictionRepository: Repository<Prediction>
  ) { }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<any> {
    const user = this.userRepository.findOneBy({ id })
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
    const { file, location = {} , prediction = [] , ...rest } = userData;

    try {
      // Creando y guardando File
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

      
        const predictions = prediction.map(predictData => {
          const newPrediction = this.predictionRepository.create({
            id: uuid(),
            ...predictData,
          });
          return this.predictionRepository.save(newPrediction);
        });

      
      
      const savedPredictions = await Promise.all(predictions);
      const user = this.userRepository.create({
        id: uuid(),
        password: bcrypt.hashSync(password, 10),
        file: savedFile,
        location: savedLocation,
        prediction: savedPredictions,
        ...rest,
      });

      const response = await this.userRepository.save(user);

      const { password: passw, ...userResponse } = response;
      return userResponse;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Cannot create user');
    }
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id)
  }

  async addPrediction(id:string):Promise<any>{
    console.log(id)
    const update =await this.userRepository.findOneBy({id}) 
    return update
    console.log(update)
  }
  
}
