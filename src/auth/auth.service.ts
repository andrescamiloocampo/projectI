import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn(pass: string,username: string): Promise<any> {    
    const user = await this.userService.findOneByUsername(username)

    if(!user){
      return{
        acces_token: '',
        message: 'User not found'
      }
    }
    console.log(user)
    if(!bcrypt.compareSync(pass,user.password))
      throw new UnauthorizedException()

    const payload = {sub: user.id, username: user.username}
    return {
      acces_token: await this.jwtService.signAsync(payload),
      message: 'ok'
    }    
  }
}
