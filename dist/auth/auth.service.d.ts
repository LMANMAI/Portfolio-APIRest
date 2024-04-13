import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private readonly configService;
    private readonly apiKeyService;
    constructor(configService: ConfigService);
    validateApiKey(apiKey: string): boolean;
}
