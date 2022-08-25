import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { TransformInterceptor } from './core/interceptor/transform.interceptor';
import { HttpExceptionFilter } from './core/filter/httpException.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 开启 cors
  app.enableCors();
  // 参数校验 & 转换
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  // 响应内容格式化
  app.useGlobalInterceptors(new TransformInterceptor());
  // 错误处理
  app.useGlobalFilters(new HttpExceptionFilter());
  // Swagger 接口文档
  const config = new DocumentBuilder().addBearerAuth().setTitle('管理后台').setDescription('管理后台接口文档').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(6800);
}
bootstrap();
