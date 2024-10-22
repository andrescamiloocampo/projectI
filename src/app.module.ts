import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModule } from './test/test.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PredictionModule } from './prediction/prediction.module';
import { User,File,Location,Prediction } from './user/entities';

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
      entities: [User,File,Location,Prediction]      
    }),
    TestModule,    
    UserModule, 
    AuthModule, PredictionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
