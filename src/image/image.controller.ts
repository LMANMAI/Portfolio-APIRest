import {
  Controller,
  Post,
  Delete,
  UploadedFile,
  UseInterceptors,
  Param,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@UploadedFile() image: Express.Multer.File) {
    const imageUrl = await this.imageService.uploadImage(image);
    return { imageUrl };
  }

  @Delete('delete/:imageId')
  async deleteImage(@Param('imageId') imageId: string) {
    const success = await this.imageService.deleteImage(imageId);
    if (success) {
      return { message: 'Image deleted successfully' };
    } else {
      return { message: 'Failed to delete image' };
    }
  }
}
