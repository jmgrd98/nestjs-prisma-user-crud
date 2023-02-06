import { PrismaService } from './../../database/PrismaService';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(
    private prisma: PrismaService
    ) {}
     

  async create(createUserDto: CreateUserDto) {

    const userExists = await this.prisma.user.findFirst({
      where: {
        name: createUserDto.name,
      },
    });

    if (userExists) {
      throw new Error('User already exists!');
    }

    // const user = await this.prisma.user.create({
    //   data,
    // });

    // return user;
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
