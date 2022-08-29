import { ConsoleLogger } from '@nestjs/common';
import * as dayjs from 'dayjs';

export class MyLogger extends ConsoleLogger {
  error(message: any, options: any) {
    const time = dayjs().format('YYYY-MM-DD HH:mm:ss.SSS');
    const level = 'error';
    const pid = process.pid;
    const path = process.cwd();
    const logFormat = {
      pid,
      path,
      level,
      time,
      message,
      ...options,
    };
    // const logFormat = `${time} ${loglevel} ${pid} --- [${pid}] ${path} : ${context} ${stack} ${JSON.stringify(message)}`;
    console.error(logFormat);
  }

  log(message: any, ...optionalParams: any[]) {
    console.log(message, ...optionalParams);
  }
}
