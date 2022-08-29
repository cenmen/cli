import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { SERVER_DOMAIN, getRequirePath } from 'src/utils';
import { writeFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FileService {
  upload(file): any {
    const { originalname: filename, mimetype, buffer, size } = file;
    const { path, type } = getRequirePath(filename);
    const filePath = join(path, filename);
    try {
      writeFileSync(filePath, buffer);
      const diff = type === '' ? type : `/${type}`;
      const url = `${SERVER_DOMAIN}${diff}/${filename}`;
      return url;
    } catch (error) {
      const message = error.message || '上传文件失败';
      throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
