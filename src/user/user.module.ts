import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User,Location,File, Prediction } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User,Location,File,Prediction])],
  controllers: [UserController],
  providers: [UserService],
  exports: [TypeOrmModule,UserService]  
})
export class UserModule {}
