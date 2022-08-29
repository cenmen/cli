import { ApiProperty } from '@nestjs/swagger';

export class ImageUploadDto {
  @ApiProperty({ format: 'binary', description: '文件' })
  file: string;
}
