import { Injectable } from '@nestjs/common';
import * as cloudinary from 'cloudinary';
// import * as toStream from 'buffer-to-stream';
import { Readable } from 'stream';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';

@Injectable()
export class ImageService {
  constructor() {
    // Configuración de Cloudinary
    cloudinary.v2.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadImage(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse | string> {
    return new Promise((resolve, reject) => {
      const uploadStream = v2.uploader.upload_stream(
        { folder: 'proyects', resource_type: 'auto' },
        (error, result: any) => {
          if (error) {
            return reject(error);
          }
          resolve(result.public_id);
        },
      );

      const bufferStream = new Readable();
      bufferStream.push(file.buffer);
      bufferStream.push(null);
      bufferStream.pipe(uploadStream);
    });
  }

  async deleteImage(imageId: string): Promise<string> {
    // Eliminar imagen de Cloudinary
    return new Promise<any>((resolve, reject) => {
      v2.uploader.destroy(imageId, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
          return result.result === 'ok';
        }
      });
    });
  }
}
