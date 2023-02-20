import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "../users/entities/user.entity";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) {}
    createTypeOrmOptions(): TypeOrmModuleOptions {
        if (process.env.NODE_ENV === "development") {
            return {
                type: "sqlite",
                synchronize: true,
                database: "db.sqlite",
                entities: [User],
            };
        }
    }
}
