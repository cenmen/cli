import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom, map } from 'rxjs';
import { QueryBannerListDto } from './dto/api.dto';

@Injectable()
export class JuejinService {
  constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) {}
  api = this.configService.get('api');

  async getJuejinBannerList(params: QueryBannerListDto) {
    const url = `${this.api.juejin}/event_api/v1/event/banner_list`;
    const data = await lastValueFrom(this.httpService.get(url, { params }).pipe(map((response) => response.data)));
    return data?.data;
  }
}
