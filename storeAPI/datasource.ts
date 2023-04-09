import { DataSource, DataSourceOptions } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { config } from "dotenv";

config({ path: ".env" });

const configService = new ConfigService();
const options: DataSourceOptions = {
    type: "postgres",
    database: configService.get<string>("DATABASE_NAME"),
    port: configService.get<number>("DATABASE_PORT"),
    host: configService.get<string>("DATABASE_HOST"),
    username: configService.get<string>("DATABASE_USERNAME"),
    password: configService.get<string>("DATABASE_PASSWORD"),
    entities: ["src/**/*.entity.ts"],
    migrations: ["src/migrations/*.ts"],
};
console.log(options);
export default new DataSource(options);
