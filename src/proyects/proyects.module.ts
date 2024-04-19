import { Module } from '@nestjs/common';
import { ProyectsController } from './proyects.controller';
import { ProyectsService } from './proyects.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProyectSchema } from '../Schema/proyects.schema';
import { ImageService } from 'src/image/image.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Proyects', schema: ProyectSchema }]),
  ],
  controllers: [ProyectsController],
  providers: [ProyectsService, ImageService],
})
export class ProyectsModule {}
