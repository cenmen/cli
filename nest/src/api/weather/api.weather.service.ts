import { lastValueFrom } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ApiWeatherService {
  constructor(private httpService: HttpService) {}

  fetchWeatherByCity({ province, city }) {
    const params = {
      prov: province,
      city,
    };
    return lastValueFrom(this.httpService.get('http://m.hao123.com/hao123_api/a/tianqi/getTodayData', { params }));
  }
}
