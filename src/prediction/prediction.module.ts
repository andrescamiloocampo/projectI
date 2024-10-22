import { Module } from '@nestjs/common';
import { PredictionService } from './prediction.service';
import { PredictionController } from './prediction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prediction } from './entities/prediction.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Prediction])],
  controllers: [PredictionController],
  providers: [PredictionService],
})
export class PredictionModule {}
