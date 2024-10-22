import { Injectable, PreconditionFailedException } from '@nestjs/common';
import { Prediction } from './entities/prediction.entity';
import { InjectRepository, } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePredictionDto } from './dto';
import { v4 as uuid } from 'uuid';
@Injectable()
export class PredictionService {

  constructor(
    @InjectRepository(Prediction)
    private readonly predictionRepository: Repository<Prediction>
  ) { }

  async consumeModel() {
    const data = await getPrediction();
    return data;

  }

  async prediction(body: any) {
    const data = await predictionPost(body);
    return data;
  }

}

const getPrediction = async (): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MODEL}/prediction`,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      },
    );
    if (!response.ok) {
      throw new Error('No se pudo obtener la informacion');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, data: error };
  }
};

const predictionPost = async (body: any): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MODEL}/predictionPost`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      },
    );
    if (!response.ok) {
      throw new Error('No se pudo obtener la informacion');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, data: error };
  }

};

