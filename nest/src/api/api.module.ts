import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ApiWeatherService } from './weather/api.weather.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
    }),
  ],
  providers: [ApiWeatherService],
  exports: [ApiWeatherService],
})
export class ApiModule {}
