import {
    ExecutionContext,
    NestInterceptor,
    CallHandler,
    UseInterceptors,
    UnauthorizedException,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { User } from "../users/entities/user.entity";

export class RestaurantManagerInterceptor implements NestInterceptor {
    async intercept(
        context: ExecutionContext,
        next: CallHandler
    ): Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest();
        const restrictedMethods = ["POST", "DELETE", "PATCH"];
        const restaurant = request.restaurant;
        const user = request.user;
        if (restrictedMethods.includes(request.method)) {
            if (
                !restaurant.managers.some(
                    (manager: User) => manager.id === user.id
                )
            ) {
                throw new UnauthorizedException("Not authorized!");
            }
        }

        return next.handle();
    }
}

export function VerifyRestaurantManager() {
    return UseInterceptors(new RestaurantManagerInterceptor());
}
