import { MigrationInterface, QueryRunner } from "typeorm";

export class PostRefactoring1681304995096 implements MigrationInterface {
    name = "PostRefactoring1681304995096";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "opening_hours" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "weekday" integer NOT NULL, "opening_time" TIME NOT NULL, "closing_time" TIME NOT NULL, "restaurantId" uuid, CONSTRAINT "PK_09415e2b345103b1f5971464f85" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "menu_item_option" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" integer NOT NULL DEFAULT '0', "menuItemId" uuid, CONSTRAINT "PK_3eebb5719a58ccf588a601f74dd" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "order_item_option" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" integer NOT NULL, "orderItemId" uuid, "menuItemOptionId" uuid, CONSTRAINT "PK_1a82f749b16547ee4021a479dd4" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "order_item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" integer NOT NULL, "quantity" integer NOT NULL DEFAULT '1', "menuItemId" uuid, "orderId" uuid, CONSTRAINT "PK_d01158fe15b1ead5c26fd7f4e90" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" character varying NOT NULL DEFAULT 'Placed', "total_order_items_price" integer NOT NULL, "total_order_price" integer NOT NULL DEFAULT '0', "is_paid" boolean NOT NULL DEFAULT false, "payment_method" character varying NOT NULL DEFAULT 'Online', "tax_price" integer NOT NULL DEFAULT '0', "delivery_price" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "restaurantId" uuid, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "user_address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" character varying NOT NULL, "building" character varying NOT NULL, "city" character varying NOT NULL, "post_code" character varying, "country" character varying NOT NULL DEFAULT 'Uzbekistan', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_302d96673413455481d5ff4022a" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'Customer', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "restaurant" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying, "phone" character varying NOT NULL, "website" character varying, "city" character varying NOT NULL, "street" character varying NOT NULL, "zipcode" character varying NOT NULL, "lng" integer NOT NULL, "lat" integer NOT NULL, "logo" character varying NOT NULL, "banner" character varying NOT NULL, "min_order_value" integer NOT NULL DEFAULT '0', "delivery_supported" boolean NOT NULL DEFAULT true, "delivery_fee" integer NOT NULL DEFAULT '0', "tax_price" integer NOT NULL DEFAULT '0', "in_store_pickup" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_649e250d8b8165cb406d99aa30f" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "menu_item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" text NOT NULL, "price" double precision NOT NULL, "image" character varying, "categoryId" uuid, "restaurantId" uuid, CONSTRAINT "PK_722c4de0accbbfafc77947a8556" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "menu_category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "restaurantId" uuid, CONSTRAINT "PK_246dfbfa0f3b0a4e953f7490544" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "restaurant_managers_user" ("restaurantId" uuid NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "PK_eaa808f28fac684a06f4d40965e" PRIMARY KEY ("restaurantId", "userId"))`
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_9fd0c422ebd4eb4de6ec00ba41" ON "restaurant_managers_user" ("restaurantId") `
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_9808f9f9d4bef0db4238ac2416" ON "restaurant_managers_user" ("userId") `
        );
        await queryRunner.query(
            `ALTER TABLE "opening_hours" ADD CONSTRAINT "FK_e6fd43a1ef0a1cea91aa02278db" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "menu_item_option" ADD CONSTRAINT "FK_a825c305cdfb4271d99ccb88a4b" FOREIGN KEY ("menuItemId") REFERENCES "menu_item"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "order_item_option" ADD CONSTRAINT "FK_32411983392d5b4651af1411170" FOREIGN KEY ("orderItemId") REFERENCES "order_item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "order_item_option" ADD CONSTRAINT "FK_eb62154dc9739f65f53d2f02b32" FOREIGN KEY ("menuItemOptionId") REFERENCES "menu_item_option"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "order_item" ADD CONSTRAINT "FK_caa901372ba1b5aa30d1950b458" FOREIGN KEY ("menuItemId") REFERENCES "menu_item"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "order_item" ADD CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "order" ADD CONSTRAINT "FK_caabe91507b3379c7ba73637b84" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "order" ADD CONSTRAINT "FK_c93f22720c77241d2476c07cabf" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "user_address" ADD CONSTRAINT "FK_1abd8badc4a127b0f357d9ecbc2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "menu_item" ADD CONSTRAINT "FK_4af7d3076242d526641d4443d79" FOREIGN KEY ("categoryId") REFERENCES "menu_category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "menu_item" ADD CONSTRAINT "FK_3cefe83c00b071077959f67e8e8" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "menu_category" ADD CONSTRAINT "FK_4f1d952339a20edaa4164e4bf70" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "restaurant_managers_user" ADD CONSTRAINT "FK_9fd0c422ebd4eb4de6ec00ba412" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE`
        );
        await queryRunner.query(
            `ALTER TABLE "restaurant_managers_user" ADD CONSTRAINT "FK_9808f9f9d4bef0db4238ac24166" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "restaurant_managers_user" DROP CONSTRAINT "FK_9808f9f9d4bef0db4238ac24166"`
        );
        await queryRunner.query(
            `ALTER TABLE "restaurant_managers_user" DROP CONSTRAINT "FK_9fd0c422ebd4eb4de6ec00ba412"`
        );
        await queryRunner.query(
            `ALTER TABLE "menu_category" DROP CONSTRAINT "FK_4f1d952339a20edaa4164e4bf70"`
        );
        await queryRunner.query(
            `ALTER TABLE "menu_item" DROP CONSTRAINT "FK_3cefe83c00b071077959f67e8e8"`
        );
        await queryRunner.query(
            `ALTER TABLE "menu_item" DROP CONSTRAINT "FK_4af7d3076242d526641d4443d79"`
        );
        await queryRunner.query(
            `ALTER TABLE "user_address" DROP CONSTRAINT "FK_1abd8badc4a127b0f357d9ecbc2"`
        );
        await queryRunner.query(
            `ALTER TABLE "order" DROP CONSTRAINT "FK_c93f22720c77241d2476c07cabf"`
        );
        await queryRunner.query(
            `ALTER TABLE "order" DROP CONSTRAINT "FK_caabe91507b3379c7ba73637b84"`
        );
        await queryRunner.query(
            `ALTER TABLE "order_item" DROP CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0"`
        );
        await queryRunner.query(
            `ALTER TABLE "order_item" DROP CONSTRAINT "FK_caa901372ba1b5aa30d1950b458"`
        );
        await queryRunner.query(
            `ALTER TABLE "order_item_option" DROP CONSTRAINT "FK_eb62154dc9739f65f53d2f02b32"`
        );
        await queryRunner.query(
            `ALTER TABLE "order_item_option" DROP CONSTRAINT "FK_32411983392d5b4651af1411170"`
        );
        await queryRunner.query(
            `ALTER TABLE "menu_item_option" DROP CONSTRAINT "FK_a825c305cdfb4271d99ccb88a4b"`
        );
        await queryRunner.query(
            `ALTER TABLE "opening_hours" DROP CONSTRAINT "FK_e6fd43a1ef0a1cea91aa02278db"`
        );
        await queryRunner.query(
            `DROP INDEX "public"."IDX_9808f9f9d4bef0db4238ac2416"`
        );
        await queryRunner.query(
            `DROP INDEX "public"."IDX_9fd0c422ebd4eb4de6ec00ba41"`
        );
        await queryRunner.query(`DROP TABLE "restaurant_managers_user"`);
        await queryRunner.query(`DROP TABLE "menu_category"`);
        await queryRunner.query(`DROP TABLE "menu_item"`);
        await queryRunner.query(`DROP TABLE "restaurant"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "user_address"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "order_item"`);
        await queryRunner.query(`DROP TABLE "order_item_option"`);
        await queryRunner.query(`DROP TABLE "menu_item_option"`);
        await queryRunner.query(`DROP TABLE "opening_hours"`);
    }
}
