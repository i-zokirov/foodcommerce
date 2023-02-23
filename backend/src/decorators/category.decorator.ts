import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";

const Category = createParamDecorator(
    (data: never, context: ExecutionContext) => {
        const request: Request = context.switchToHttp().getRequest();
        return request.menu_category;
    }
);

export default Category;
