import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), RestaurantsModule],
})
export class AppModule {}
