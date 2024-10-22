import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, isString, IsString,MinLength,IsUUID} from "class-validator";
import { File } from "../entities";

export class CreateLocationDto{
    
    @IsOptional()
    @IsString()
    latitude?: string;
    
    @IsOptional()
    @IsString()
    altitude?: string;

    
}