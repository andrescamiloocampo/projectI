import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, isString, IsString,MinLength,IsUUID, IsEnum, isEnum} from "class-validator";
import { Prediction } from "../../user/entities";
import { ScheduleE, WeatherE } from "src/models/prediction.models";


export class CreatePredictionDto{



    @IsNumber()
    expectedTime: number;

    @IsNumber()
    realTime: number;

    @IsEnum(WeatherE)
    weather:WeatherE;

    @IsEnum(ScheduleE)
    schedule:ScheduleE;
}