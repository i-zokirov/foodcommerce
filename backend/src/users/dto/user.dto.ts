import { Expose } from "class-transformer";
export class UserDto {
    @Expose()
    id: number;
    @Expose()
    email: string;
    @Expose()
    firstname: string;
    @Expose()
    lastname: string;
}
