import { IsString } from "class-validator";
import { IsEmail, IsUppercase, MinLength } from "class-validator/types/decorator/decorators";
export class CreateUserDto {

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  @IsUppercase(1)
  password: string;
}
