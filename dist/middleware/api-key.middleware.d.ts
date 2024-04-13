import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { AuthService } from 'src/auth/auth.service';
declare const ApiKeyMiddleware_base: new (...args: any[]) => HeaderAPIKeyStrategy;
export declare class ApiKeyMiddleware extends ApiKeyMiddleware_base {
    private authService;
    constructor(authService: AuthService);
}
export {};
