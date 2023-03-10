import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) {}
    createTypeOrmOptions(): TypeOrmModuleOptions {
        if (process.env.NODE_ENV === "development") {
            return {
                type: "sqlite",
                database: "foodcommerce.db",
                entities: ["**/*.entity.js"],
                synchronize: true,
                autoLoadEntities: true,
                logging: true,
            };
        } else if (process.env.NODE_ENV === "production") {
            return {
                type: "postgres",
                database: this.configService.get<string>("DATABASE_NAME"),
                port: this.configService.get<number>("DATABASE_PORT"),
                url: this.configService.get<string>("DATABASE_URL"),
                username: this.configService.get<string>("DATABASE_USERNAME"),
                password: this.configService.get<string>("DATABASE_PASSWORD"),
                entities: ["**/*.entity.js"],
                synchronize: this.configService.get<boolean>(
                    "DATABASE_SYNCHRONIZE"
                ),
                autoLoadEntities: true,
                ssl: {
                    rejectUnauthorized: true,
                },
            };
        } else if (process.env.NODE_ENV === "test") {
            return {
                type: "sqlite",
                database: "foodcommerce.test.db",
                entities: ["**/*.entity.js"],
                synchronize: true,
                autoLoadEntities: true,
                logging: true,
            };
        }
    }
}
