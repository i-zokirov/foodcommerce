import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { OpeningHours } from "./entities/opening_hours.entity";

@Injectable()
export class OpeningHoursService {
    constructor(
        @InjectRepository(OpeningHours)
        private readonly repository: Repository<OpeningHours>
    ) {}

    create() {}
}
