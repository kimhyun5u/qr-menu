import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurant } from './schemas/restaurants.schema';
import { Model } from 'mongoose';
import { createRestaurantDto } from './dto/create-restaurant.dto';

@Injectable()
export class RestaurantsService {
    constructor(@InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>){}

    async create(createRestaurantDto: createRestaurantDto): Promise<Restaurant> {
        const createRestaurant = await this.restaurantModel.create(createRestaurantDto);
        return createRestaurant;
    }

    async findOne(id: string): Promise<Restaurant> {
        return this.restaurantModel.findOne({ _id: id }).exec();
    }
    
    async findByName(name: string): Promise<Restaurant[]> {
        return this.restaurantModel.find({name: {$regex: '.*' + name + '.*'}}).exec();
    }
    async findAll(): Promise<Restaurant[]> {
        return this.restaurantModel.find().exec();
    }
}
