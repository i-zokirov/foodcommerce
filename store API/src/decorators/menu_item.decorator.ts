import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";

const CurrentMenuItem = createParamDecorator(
    (data: never, context: ExecutionContext) => {
        const request: Request = context.switchToHttp().getRequest();
        return request.menu_item;
    }
);

export default CurrentMenuItem;
