import { SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { RestaurantsService } from "./restaurants.service";

@WebSocketGateway()
export class RestaurantsGateway {
    constructor(private readonly restaurantsService: RestaurantsService) {}
    @SubscribeMessage("restaurants:open")
    findOpenRestaurants(client: any, payload: any): any {
        console.log("client", client.id);
        return this.restaurantsService.findOpenRestaurants();
    }

    @SubscribeMessage("restaurants:all")
    findAllRestaurants(client: any, payload: any): any {
        console.log("client", client.id);
        return this.restaurantsService.findAll();
    }
}
