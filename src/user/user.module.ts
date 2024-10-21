import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User,Location,File } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User,Location,File])],
  controllers: [UserController],
  providers: [UserService],
  exports: [TypeOrmModule,UserService]  
})
export class UserModule {}
