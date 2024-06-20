import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProyectsModule } from './proyects/proyects.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ApiKeyMiddleware } from './middleware';
import { ImageService } from './image/image.service';
import { ImageModule } from './image/image.module';
import { SkillsModule } from './skills/skills.module';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRoot(process.env.DB_URL),
    ProyectsModule,
    ImageModule,
    SkillsModule,
  ],
  controllers: [AppController],
  providers: [AppService, ImageService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiKeyMiddleware).forRoutes('*');
  }
}
