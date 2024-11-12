import { Module } from '@nestjs/common';
import { PredictionService } from './predictions.service';
import { PredictionController } from './predictions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Predictions } from './entities/predictions.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Predictions])],
  controllers: [PredictionController],
  providers: [PredictionService],
})
export class PredictionModule {}
