import {
  Controller,
  Get,  
  Param,
  Delete,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':username')
  async findOne(@Param('username') username: string) {
    const user = this.userService.findOneByUsername(username);        
    return user;
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
  
  @Post()
  async create(@Body() createUserDto:CreateUserDto){
    return this.userService.create(createUserDto)
  }
}
