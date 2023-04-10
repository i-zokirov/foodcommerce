import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { OpeningHours } from "./entities/opening_hours.entity";

@Injectable()
export class OpeningHoursService {
    constructor(
        @InjectRepository(OpeningHours)
        private readonly repository: Repository<OpeningHours>
    ) {}

    async create(restaurantId: string, attrs: Partial<OpeningHours>) {
        const openingHour = await this.repository.findOne({
            where: { restaurant: { id: restaurantId }, weekday: attrs.weekday },
        });
        if (openingHour) {
            Object.assign(openingHour, attrs);
            return this.repository.save(openingHour);
        } else {
            const openinghour = this.repository.create(attrs);
            return this.repository.save(openinghour);
        }
    }

    findAll(restaurantId: string) {
        return this.repository.find({
            where: { restaurant: { id: restaurantId } },
            order: {
                weekday: "ASC",
            },
        });
    }

    async remove(opening_hoursId: string) {
        const opening_hour = await this.repository.findOne({
            where: { id: opening_hoursId },
        });
        if (!opening_hour) {
            throw new NotFoundException();
        }
        return this.repository.remove(opening_hour);
    }
}
