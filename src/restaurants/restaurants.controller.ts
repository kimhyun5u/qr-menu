import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { createRestaurantDto } from './dto/create-restaurant.dto';
import { Restaurant } from './schemas/restaurants.schema';

@Controller('restaurants')
export class RestaurantsController {
    constructor(private readonly restaurantService: RestaurantsService) {}


    @Post()
    async create(@Body() createRestaurantDto: createRestaurantDto) {
        await this.restaurantService.create(createRestaurantDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Restaurant> {
        return this.restaurantService.findOne(id);
    }

    @Get()
    async findAll(): Promise<Restaurant[]> {
        return this.restaurantService.findAll();
    }
    
}
