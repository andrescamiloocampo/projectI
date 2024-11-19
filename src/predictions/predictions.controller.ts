import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PredictionService } from './predictions.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
@Controller('prediction')
export class PredictionController {
  constructor(private readonly predictionService: PredictionService) {}

  @UseGuards(AuthGuard)
  @Get(':id')
  async findAll(@Param('id') id: string) {
    return await this.predictionService.findAll(id);
  }

  @Post()
  async predict(@Body() body: any){
    return await this.predictionService.prediction(body);
  }
}
