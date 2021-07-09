import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProyectsModule } from './proyects/proyects.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRoot(process.env.DB_URL, { useNewUrlParser: true }),
    ProyectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
