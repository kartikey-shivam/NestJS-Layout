import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../DTO/create.user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/getUser')
  getUser() {
    return this.userService.getUser();
  }

  @Post('/createUser')
  addUser(@Body() data: CreateUserDto) {
    return this.userService.createUser(data);
  }
}
