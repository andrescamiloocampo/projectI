import { Injectable, PreconditionFailedException } from '@nestjs/common';
import { Predictions } from './entities/predictions.entity';
import { InjectRepository, } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PredictionService {

  constructor(
    @InjectRepository(Predictions)
    private readonly predictionRepository: Repository<Predictions>
  ) { }

  async findAll(id: string) {
    const query = `
      SELECT * 
      FROM predictions 
      WHERE userid = $1
    `;
  
    return await this.predictionRepository.query(query, [id]);
  }

  async prediction(body: any) {
    const data = await predictionPost(body);
    return data;
  }

}

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

