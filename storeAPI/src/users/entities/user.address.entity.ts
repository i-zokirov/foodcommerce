import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class UserAddress {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => User, (user) => user.registered_addresses, {
        onDelete: "CASCADE",
    })
    user: User;

    @Column()
    street: string;

    @Column()
    building: string;

    @Column()
    city: string;

    @Column({ nullable: true })
    post_code: string;

    @Column({ default: "Uzbekistan" })
    country: string;

    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}
