import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateRouteDto {
    
    @IsString()
    @MinLength(1)
    name: string;

    @IsNumber()
    code: number;
}
