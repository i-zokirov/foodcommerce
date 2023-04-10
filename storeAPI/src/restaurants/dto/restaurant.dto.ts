import { Expose, Transform } from "class-transformer";
import { User } from "src/users/entities/user.entity";
import { OpeningHours } from "../entities/opening_hours.entity";
import { OpeningHoursDto } from "./opening-hours.dto";

export class RestaurantDto {
    @Expose()
    id: string;
    @Expose()
    name: string;
    @Expose()
    email: string;
    @Expose()
    phone: string;
    @Expose()
    website: string;
    @Expose()
    city: string;
    @Expose()
    street: string;
    @Expose()
    zipcode: string;
    @Expose()
    lng: number;
    @Expose()
    lat: number;
    @Expose()
    logo: string;
    @Expose()
    banner: string;
    @Expose()
    min_order_value: number;
    @Expose()
    delivery_supported: boolean;
    @Expose()
    in_store_pickup: boolean;
    @Expose()
    @Transform(({ obj }) => obj.opening_hours.map((openinghour) => openinghour))
    opening_hours: OpeningHoursDto[];
    @Expose()
    @Transform(({ obj }) =>
        obj.managers && obj.managers.length
            ? obj.managers.map((manager: User) => manager.id)
            : []
    )
    managers: User[];
}
