import cloudy from '../assets/cloudy.svg';
import rainy from '../assets/rainy.svg';
import sunny from '../assets/sunny.svg';
import stormy from '../assets/stormy.svg';

const WEATHER_CONDITIONS = {
  CLOUDY: 'cloudy',
  RAINY: 'rainy',
  SUNNY: 'sunny',
  STORMY: 'stormy',
};

export const IMAGE_MAP = {
  [WEATHER_CONDITIONS.CLOUDY]: cloudy,
  [WEATHER_CONDITIONS.RAINY]: rainy,
  [WEATHER_CONDITIONS.SUNNY]: sunny,
  [WEATHER_CONDITIONS.STORMY]: stormy,
};
