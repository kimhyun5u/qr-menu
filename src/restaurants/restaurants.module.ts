import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Restaurant, restaurantSchema } from './schemas/restaurants.schema';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantsService } from './restaurants.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Restaurant.name, schema: restaurantSchema }])],
    controllers: [RestaurantsController],
    providers: [RestaurantsService],
})
export class RestaurantsModule {}
