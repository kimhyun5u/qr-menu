import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'), 
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }), 
    RestaurantsModule],
})
export class AppModule {}
