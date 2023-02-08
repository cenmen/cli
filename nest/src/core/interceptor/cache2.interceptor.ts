import { Injectable, ExecutionContext, CacheInterceptor } from '@nestjs/common';
import { isType } from '../../utils';

@Injectable()
export class PostCacheInterceptor extends CacheInterceptor {
  trackBy(context: ExecutionContext): string | undefined {
    const requestInfo = context.getArgs()[0];
    const { url, body } = requestInfo;
    const allParams = [...Object.entries(body)];
    const allParamsKeyStr = allParams.reduce((total, cur: any, index) => {
      const isLastItem = index === allParams.length - 1;
      const [key, value] = cur;
      let cacheValueKeyStr = value;
      // 对象直接过滤
      if (isType(value, 'Object')) return total;
      if (isType(value, 'Array')) {
        if (value.length > 200) return total;
        cacheValueKeyStr = value.join(',');
      }
      return total + `${key}:${value}${isLastItem ? '' : '_'}`;
    }, '');
    const cacheKey = `${url}_${allParamsKeyStr}`;
    return cacheKey;
  }
}
