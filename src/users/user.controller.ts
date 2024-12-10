import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../common/dto/create-user.dto';
import { buildResponse } from 'src/helpers/response.helper';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUser(@Param('id') id: string) {
    const user = await this.userService.getUserById(id);
    return buildResponse('success', user, 'User fetched successfully');
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.createUser(createUserDto);
    return buildResponse('success', user, 'User created successfully');
  }
}
