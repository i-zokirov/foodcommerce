import { DataSource, DataSourceOptions } from "typeorm";
export const datasourceoptions = {
    type: "sqlite",
    database: "foodcommerce.db",
    entities: ["**/*.entity.js"],
    autoLoadEntities: true,
    migrations: ["dist/db/migrations/*.js"],
    synchronize: false,
    logging: true,
};

const appDataSource = new DataSource(datasourceoptions as DataSourceOptions);

export default appDataSource;
