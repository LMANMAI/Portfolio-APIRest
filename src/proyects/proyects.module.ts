import { Module } from '@nestjs/common';
import { ProyectsController } from './proyects.controller';
import { ProyectsService } from './proyects.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProyectSchema } from '../Schema/proyects.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Proyects', schema: ProyectSchema }]),
  ],
  controllers: [ProyectsController],
  providers: [ProyectsService],
})
export class ProyectsModule {}
