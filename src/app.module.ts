import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { TestModule } from './test/test.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { Vehicle } from './vehicle/entities/vehicle.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,      
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
      entities: [User,Vehicle]      
    }),
    TestModule,    
    UserModule, 
    AuthModule, VehicleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
