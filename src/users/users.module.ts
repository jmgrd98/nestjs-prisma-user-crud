import { PrismaService } from './../../database/PrismaService';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
  imports: [],
})
export class UsersModule {}
