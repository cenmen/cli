import { Controller, UseInterceptors, UploadedFile, Post } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { ApiTags, ApiBody, ApiOperation, ApiConsumes } from '@nestjs/swagger';
import { ImageUploadDto } from './dto/file.dto';
import { FileService } from './file.service';

@Controller('file')
@ApiTags('文件管理模块')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: '上传文件' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: ImageUploadDto })
  upload(@UploadedFile() file: Express.Multer.File) {
    return this.fileService.upload(file);
  }
}
