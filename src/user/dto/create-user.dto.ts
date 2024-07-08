import { IsBoolean, IsString,MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @MinLength(3)
    username: string;

    @IsString()
    @MinLength(3)
    lastName: string;

    @IsBoolean()    
    isActive: boolean;    

    @IsString()
    @MinLength(8)
    password: string;
}
