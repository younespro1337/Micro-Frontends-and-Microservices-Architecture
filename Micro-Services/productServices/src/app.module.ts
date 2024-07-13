import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { AppController } from './app.controller'; // Import AppController
import { AppService } from './app.service'; // Import AppService

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST, 
      port: parseInt(process.env.PG_PORT, 10),
      username: process.env.PG_USER, 
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    ProductsModule,
  ],
  //
  controllers: [AppController], 
  providers: [AppService],
})
export class AppModule {}
