import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Restaurant } from "./entities/restaurant.entity";
import { CreateRestaurantDto } from "./dto/create-restaurant.dto";
import { UpdateRestaurantDto } from "./dto/update-restaurant.dto";

@Injectable()
export class RestaurantsService {
    constructor(
        @InjectRepository(Restaurant)
        private readonly repository: Repository<Restaurant>
    ) {}
    create(createRestaurantDto: CreateRestaurantDto) {
        const restaurant = this.repository.create(createRestaurantDto);
        return this.repository.save(restaurant);
    }

    findAll() {
        return this.repository.find();
    }

    findOne(id: string) {
        return this.repository.findOne({
            where: { id },
        });
    }

    update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
        return `This action updates a #${id} restaurant`;
    }

    remove(id: number) {
        return `This action removes a #${id} restaurant`;
    }
}
