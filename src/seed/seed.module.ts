import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ZoneModule } from 'src/zone/zone.module';
import { RouteModule } from 'src/route/route.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ZoneModule,RouteModule]
})
export class SeedModule {}
