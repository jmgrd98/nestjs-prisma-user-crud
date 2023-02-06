import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString } from 'class-validator';
import { IsEmail, IsUppercase, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {

  
}
