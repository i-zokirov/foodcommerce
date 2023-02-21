import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Restaurant } from "./entities/restaurant.entity";
import { UpdateRestaurantDto } from "./dto/update-restaurant.dto";

@Injectable()
export class RestaurantsService {
    constructor(
        @InjectRepository(Restaurant)
        private readonly repository: Repository<Restaurant>
    ) {}
    create(restaurantDto: Partial<Restaurant>) {
        const restaurant = this.repository.create(restaurantDto);
        return this.repository.save(restaurant);
    }

    findAll() {
        return this.repository
            .createQueryBuilder("restaurant")
            .leftJoinAndMapMany(
                "restaurant.opening_hours",
                "opening_hours",
                "opening_hours",
                "opening_hours.restaurant_id = restaurant.id"
            )
            .getMany();
    }

    findOpenRestaurants() {
        const currentDayOfWeek = new Date().getDay();
        const currentTime = new Date().toLocaleTimeString("en-US", {
            hour12: false,
        });

        return this.repository
            .createQueryBuilder("restaurant")
            .leftJoinAndMapMany(
                "restaurant.opening_hours",
                "opening_hours",
                "opening_hours",
                "opening_hours.restaurant_id = restaurant.id"
            )
            .where("opening_hours.weekday = :currentDayOfWeek", {
                currentDayOfWeek,
            })
            .andWhere("opening_hours.opening_time <= :currentTime", {
                currentTime,
            })
            .andWhere("opening_hours.closing_time >= :currentTime", {
                currentTime,
            })
            .getMany();
    }

    findOne(id: string) {
        return this.repository
            .createQueryBuilder("restaurant")
            .leftJoinAndMapMany(
                "restaurant.opening_hours",
                "opening_hours",
                "opening_hours",
                "opening_hours.restaurant_id = restaurant.id"
            )
            .where("restaurant.id = :id", { id })
            .getOne();
    }

    async update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
        const restaurant = await this.repository.findOne({ where: { id } });
        if (!restaurant) {
            throw new NotFoundException("Restaurant not found!");
        }
        Object.assign(restaurant, updateRestaurantDto);
        return this.repository.save(restaurant);
    }

    async remove(id: string) {
        const restaurant = await this.repository.findOne({ where: { id } });
        if (!restaurant) {
            throw new NotFoundException("Restaurant not found!");
        }
        return this.repository.remove(restaurant);
    }
}
