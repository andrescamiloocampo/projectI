import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, isString, IsString,MinLength, ValidateNested } from "class-validator";
import { File,Location } from "../entities";
import { Type } from "class-transformer";
import { CreateFileDto,CreateLocationDto} from "./index";
export class CreateUserDto {

    @IsString()
    @MinLength(3)    
    username: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @MinLength(3)
    lastName: string;

    @IsNumber()
    creationDate: number;

    @IsBoolean()    
    isActive: boolean;    

    @IsString()
    @MinLength(8)
    password: string;

    @ValidateNested({each:true})
    @Type(()=>CreateFileDto)
    file: File;

    @ValidateNested({each:true})
    @Type(()=>CreateLocationDto)
    location: Location;

}
