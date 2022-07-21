import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ApiWeatherService } from 'src/api/weather/api.weather.service';

@Injectable()
export class WeatherService {
  constructor(private apiWeatherService: ApiWeatherService) {}

  async getWeatherByCity(query) {
    const { province, city } = query;
    const { data: weather } = await this.apiWeatherService.fetchWeatherByCity({
      province,
      city,
    });
    return weather;
  }

  getException() {
    throw new Error();
    // throw new HttpException(
    //   {
    //     status: HttpStatus.FORBIDDEN,
    //     error: 'This is a custom message',
    //   },
    //   HttpStatus.FORBIDDEN,
    // );
  }

  getValidator(query) {
    return query;
  }
}
