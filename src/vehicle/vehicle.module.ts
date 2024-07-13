import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { Vehicle } from './entities/vehicle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle,User])],
  controllers: [VehicleController],
  providers: [VehicleService],
  exports: [TypeOrmModule,VehicleService]
})
export class VehicleModule {}
