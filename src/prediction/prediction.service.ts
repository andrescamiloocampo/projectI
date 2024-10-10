import { Injectable } from '@nestjs/common';

@Injectable()
export class PredictionService {
  async consumeModel() {
    const data = await getPrediction();
    return data;
  }
}

const getPrediction = async():Promise<any> => {
  try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_MODEL}/prediction`,{
          headers: {
              'Content-Type':'application/json'
          }
      });
      if(!response.ok){
          throw new Error('No se pudo obtener la informacion');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      return {success: false, data: error}
  }
}