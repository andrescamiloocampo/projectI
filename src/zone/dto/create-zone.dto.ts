import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateZoneDto {
    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    name: string;

    @IsNumber()    
    @IsNotEmpty()
    code: number;

    @IsString()
    distance: string;
}
