import { Expose } from "class-transformer";

export class OpeningHoursDto {
    @Expose()
    id: string;
    @Expose()
    restaurant_id: string;

    @Expose()
    weekday: number;

    @Expose()
    opening_time: string;

    @Expose()
    closing_time: string;
}
