import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, isString, IsString,IsUUID,isUUID,MinLength } from "class-validator";
import { File } from "../entities";

export class CreateFileDto{


    @IsString()
    @IsOptional()
    image?: string;
}