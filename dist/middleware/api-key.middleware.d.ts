import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class ApiKeyMiddleware implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
