import { Module } from "@nestjs/common";
import { RestaurantsService } from "./restaurants.service";
import { RestaurantsController } from "./restaurants.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Restaurant } from "./entities/restaurant.entity";
import { OpeningHours } from "./entities/opening_hours.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Restaurant, OpeningHours])],
    controllers: [RestaurantsController],
    providers: [RestaurantsService],
})
export class RestaurantsModule {}
