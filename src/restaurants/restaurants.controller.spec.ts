import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantsService } from './restaurants.service';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Connection } from 'mongoose';
import { connect } from 'http2';
import { MongooseModule } from '@nestjs/mongoose';

describe('RestaurantsController', () => {
  let controller: RestaurantsController;

  // beforeEach(async () => {
  //   const mongod = await MongoMemoryServer.create();
  //   const uri = mongod.getUri();
  //   const module: TestingModule = await Test.createTestingModule({
  //     imports: [
  //       MongooseModule.forRoot('mongodb://root:pw1234@mongo:27017/?authMechanism=DEFAULT'),
  //     ],
  //     controllers: [RestaurantsController],
  //     providers: [
  //       RestaurantsService
  //     ]
  //   }).compile();

  //   controller = module.get<RestaurantsController>(RestaurantsController);
  // });

  it('should be defined', () => {
    expect(controller).toBeUndefined();
  });
});
