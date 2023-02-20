import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
export enum UserRole {
    Customer = "Customer",
    Merchant = "Merchant",
    Admin = "Admin",
}
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    firstname: string;
    @Column()
    lastname: string;
    @Column({ default: UserRole.Customer })
    role: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}
