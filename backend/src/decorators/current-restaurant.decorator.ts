import { createParamDecorator, ExecutionContext } from "@nestjs/common";

const CurrentRestaurant = createParamDecorator(
    (data: never, context: ExecutionContext) => {
        const request = context.switchToHttp().getRequest();
        return request.restaurant;
    }
);

export default CurrentRestaurant;
