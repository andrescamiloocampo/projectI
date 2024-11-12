import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Zone } from 'src/zone/entities/zone.entity';
import { Route } from 'src/route/entities/route.entity';
import { Repository } from 'typeorm';
import { seedData } from 'src/datasources/seed';
import { ZoneService } from 'src/zone/zone.service';
import { RouteM, ZoneM } from 'src/interfaces/zone.model';
import {v4 as uuid} from 'uuid';
import { RouteService } from 'src/route/route.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly zoneService: ZoneService,
    private readonly routeService: RouteService,

    @InjectRepository(Zone)
    private readonly zoneRepository: Repository<Zone>,

    @InjectRepository(Route)
    private readonly routeRepository: Repository<Route>
  ){}

  async runSeed() {  
    await this.deleteTables();
    const firstZone = await this.insertZones();
    const firstRoute = await this.insertRoutes();
    return {message: 'Seed Executed',firstZone,firstRoute};
  }

  private async deleteTables(){    
    await this.zoneService.deleteAll();        
    await this.routeService.deleteAll();
  }

  private async insertZones(){
    const seedZones = seedData.zones;
    const zones:ZoneM[] = [];

    seedZones.forEach(zone => {
      zones.push(this.zoneRepository.create({
        id: uuid(),
        ...zone
      }));
    });
    
    const dbZones = await this.zoneRepository.save(zones);
    return dbZones[0];
  }

  private async insertRoutes(){
    const seedRoutes = seedData.routes;
    const routes: RouteM[] = [];

    seedRoutes.forEach(route => {
      routes.push(this.routeRepository.create({
        id: uuid(),
        ...route
      }));
    });

    const dbRoutes = await this.routeRepository.save(routes);
    return dbRoutes[0];
  }
} 
