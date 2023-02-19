import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { OrdersModule } from './orders/orders.module';
import { MenuItemsModule } from './menu-items/menu-items.module';
import { MenuItemsModule } from './menu_items/menu_items.module';
import { OrderItemsModule } from './order_items/order_items.module';

@Module({
  imports: [UsersModule, RestaurantsModule, OrdersModule, MenuItemsModule, OrderItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
