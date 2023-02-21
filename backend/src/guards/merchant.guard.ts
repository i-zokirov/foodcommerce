import { CanActivate, ExecutionContext } from "@nestjs/common";
import { UserRole } from "../users/entities/user.entity";

export default class MerchantGuard implements CanActivate {
    canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();

        if (!request.user) {
            return false;
        }
        return request.user.role === UserRole.Merchant;
    }
}
