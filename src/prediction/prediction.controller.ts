import { Controller, Get } from '@nestjs/common';
import { PredictionService } from './prediction.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('prediction')
export class PredictionController {
  constructor(private readonly predictionService: PredictionService) {}

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return await this.predictionService.consumeModel();
  }
}
