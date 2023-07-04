import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
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
    async findAll(@Query('name') name: string): Promise<Restaurant[]> {
        if (name) 
            return this.restaurantService.findByName(name);
        else
            return this.restaurantService.findAll();
    }
}
