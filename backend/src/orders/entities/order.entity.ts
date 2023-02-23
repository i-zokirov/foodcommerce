import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn("uuid")
    id: string;
}
