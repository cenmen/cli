import { Module } from '@nestjs/common';
import { ApiModule } from 'src/api/api.module';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

@Module({
  imports: [ApiModule],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
