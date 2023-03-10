import { IsString, IsEmail, MinLength  } from 'class-validator';

export class CreateUserDto {

  @IsString() 
  id: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
  
}
