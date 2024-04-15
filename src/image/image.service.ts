import { Injectable } from '@nestjs/common';
import * as cloudinary from 'cloudinary';

@Injectable()
export class ImageService {
  constructor() {
    // Configuración de Cloudinary
    cloudinary.v2.config({
      cloud_name: 'tu_nombre_de_usuario_en_cloudinary',
      api_key: 'tu_api_key',
      api_secret: 'tu_api_secret',
    });
  }

  async uploadImage(imagePath: string) {
    // Subir imagen a Cloudinary
    const result = await cloudinary.v2.uploader.upload(imagePath);
    return result.secure_url;
  }

  async deleteImage(imageId: string) {
    // Eliminar imagen de Cloudinary
    const result = await cloudinary.v2.uploader.destroy(imageId);
    return result.result === 'ok';
  }
}
