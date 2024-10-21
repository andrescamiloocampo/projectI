import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, isString, IsString,MinLength,IsUUID} from "class-validator";
import { File } from "../entities";

export class CreateLocationDto{

    @IsString()
    latitude: string;

    @IsString()
    altitude: string;
}