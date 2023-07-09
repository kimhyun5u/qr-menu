import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/?authMechanism=DEFAULT'), 
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '/static/'),
      serveStaticOptions:  {
        index: false,
        fallthrough: false,
      }
    }), 
    RestaurantsModule],
})
export class AppModule {}
