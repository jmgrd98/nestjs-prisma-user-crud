import {IsString, IsEmail, MinLength, IsUppercase} from 'class-validator';

export class UserDto {

  @IsString() 
  id: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}
