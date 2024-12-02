import {v4 as uuid} from 'uuid';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Route } from './entities/route.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RouteService {

  constructor(
    @InjectRepository(Route)
    private readonly routeRepository: Repository<Route>
  ){}

  async create(createRouteDto: CreateRouteDto) {
    try {
      const newRoute = this.routeRepository.create({
        id: uuid(),
        ...createRouteDto
      })
      const response = await this.routeRepository.save(newRoute);
      return response;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Cannot create zone');
    }
  }

  async findAll() {
    return await this.routeRepository.find();
  }  

  async deleteAll(){
    const query = this.routeRepository.createQueryBuilder('route');
    try {
      return await query
        .delete()
        .where({})  
        .execute()
    } catch (error) {
      console.log(error);
    }
  }

  async getRoutes(){
    return await this.getRoutesInfo();
  }

  async getRoutesInfo(){
    const headers = new Headers();
    headers.append('Content-Type','application/json');

    try {
      const response = await fetch(`${process.env.BACKEND_JAVA}/concurrent`,{
        method: 'GET',
        headers
      })
      console.log(response);
      if(!response.ok) return 'Error obteniendo la informacion';
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
}
