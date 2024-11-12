import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ZoneService } from './zone.service';
import { CreateZoneDto } from './dto/create-zone.dto';

@Controller('zone')
export class ZoneController {
  constructor(private readonly zoneService: ZoneService) {}

  @Post()
  create(@Body() createZoneDto: CreateZoneDto) {
    return this.zoneService.create(createZoneDto);
  }

  @Get()
  findAll() {
    return this.zoneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zoneService.findOne(id);
  }  

  @Delete(':id')
  delete(@Param('id') id: string){
    return this.zoneService.delete(id);
  }  
}
