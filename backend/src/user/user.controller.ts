import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import {UserService} from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.service.getUsers();
  }

  @Get(':id')
  get(@Param() params) {
    return this.service.getUser(params.id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.service.createUser(createUserDto);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.service.deleteUser(params.id);
  }

  @Patch(':id')
  update(@Param() params, @Body() updateUserDto: UpdateUserDto) {
    return this.service.updateUser(params.id, updateUserDto);
  }
}
