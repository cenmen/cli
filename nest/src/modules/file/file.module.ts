import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { FILES_PATH } from 'src/utils/index';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: FILES_PATH,
    }),
  ],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
