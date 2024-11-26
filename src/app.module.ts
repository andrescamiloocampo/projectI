import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModule } from './test/test.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PredictionModule } from './predictions/predictions.module';
import { User,File,Location,Prediction } from './user/entities';
import { ZoneModule } from './zone/zone.module';
import { Zone } from './zone/entities/zone.entity';
import { SeedModule } from './seed/seed.module';
import { RouteModule } from './route/route.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({            
      type: 'postgres',
      // host: process.env.DB_HOST,      
      // port: +process.env.DB_PORT,
      // database: process.env.DB_NAME,
      // username: process.env.DB_USER,
      // password: process.env.DB_PASSWORD,
      url: process.env.NEXT_PUBLIC_DBCON,
      autoLoadEntities: true,
      ssl:true,
      synchronize: true,
      entities: [User,File,Location,Prediction,Zone]      
    }),
    TestModule,    
    UserModule, 
    AuthModule, PredictionModule, ZoneModule, SeedModule, RouteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
