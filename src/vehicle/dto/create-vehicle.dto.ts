import { IsString } from "class-validator";

export class CreateVehicleDto {    
    @IsString()
    plate: string;

    @IsString()
    route: string;
    
    @IsString()
    userId: string;
}
