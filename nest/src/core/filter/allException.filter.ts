import { Catch, ArgumentsHost, HttpStatus, HttpException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { isArray } from 'class-validator';
import * as dayjs from 'dayjs';
import { MyLogger } from 'src/core/logger/mylogger.service';

type ErrorRes = {
  statusCode: number;
  timestamp: any;
  path: string;
  message: string;
  success: boolean;
  code?: string;
  data?: string;
};

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  constructor(private logger: MyLogger) {
    super();
  }
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorRes: ErrorRes = {
      success: false,
      statusCode: status,
      timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'),
      path: exception?.response?.config?.url || request.url,
      message: typeof exception === 'string' ? exception : '',
    };

    if (typeof exception !== 'string' && exception.response) {
      if (typeof exception.response === 'string') {
        errorRes.message = exception.response;
      } else {
        const { data, status: resStatus, message, code } = exception.response;
        errorRes.code = code;
        errorRes.statusCode = resStatus;
        // 如果是数组，则取第一个元素
        const msg = isArray(message) ? message[0] : message;
        errorRes.message = msg || data?.message;
        errorRes.code = data?.code;
        errorRes.data = data?.data;
        status = resStatus || status;
      }
    }
    delete request?.headers?.authorization;

    const options = {
      response: errorRes,
      stack: exception?.stack,
      headers: request?.headers,
      path: request?.originalUrl,
      originPath: exception?.config?.url,
    };
    this.logger.error(errorRes.message, options);
    response.status(status).json(errorRes);
  }
}
