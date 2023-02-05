import {IsString, IsEmail, MinLength, IsUppercase} from 'class-validator';

export class UserDto {

    @IsString()
    name: string;
  
    @IsEmail()
    email: string;
  
    @MinLength(6)
    @IsUppercase()
    password: string;
}
