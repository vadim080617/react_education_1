import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {User} from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUser(id:number): Promise<User> {
    const user = await this.userRepository.findOne({id});
    if (!user) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'User not found',
      }, 404);
    }

    return user;
  }

  async createUser(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return await this.userRepository.create(createUserDto);
  }
}
