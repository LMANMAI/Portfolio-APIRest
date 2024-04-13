import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProyectsController } from './proyects.controller';
import { ProyectsService } from './proyects.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProyectSchema } from '../Schema/proyects.schema';
import { ApiKeyMiddleware } from '../middleware/api-key.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Proyects', schema: ProyectSchema }]),
  ],
  controllers: [ProyectsController],
  providers: [ProyectsService],
})
export class ProyectsModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(ApiKeyMiddleware).forRoutes('proyects');
  // }
}
