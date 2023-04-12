import { DataSourceOptions, DataSource } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { config } from "dotenv";

config({ path: `.env` });

const configService = new ConfigService();

export const dataSourceOptions: DataSourceOptions = {
    type: "postgres",
    host: configService.get<string>("DATABASE_HOST"),
    port: configService.get<number>("DATABASE_PORT"),
    username: configService.get<string>("DATABASE_USERNAME"),
    password: configService.get<string>("DATABASE_PASSWORD"),
    database: configService.get<string>("DATABASE_NAME"),
    entities: ["dist/src/**/*.entity.js"],
    migrations: ["dist/db/migrations/*.js"],
    synchronize: false,
    logging: true,
};
console.log(dataSourceOptions);
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
