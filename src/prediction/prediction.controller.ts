import { Body, Controller, Get, Post } from '@nestjs/common';
import { PredictionService } from './prediction.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { Prediction } from './entities/prediction.entity';
import { CreatePredictionDto } from './dto';

@Controller('prediction')
export class PredictionController {
  constructor(private readonly predictionService: PredictionService) {}

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return await this.predictionService.consumeModel();
  }

  @Post()
  async predict(@Body() body: any){
    return await this.predictionService.prediction(body);
  }

}
