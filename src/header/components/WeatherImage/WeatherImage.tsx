import { IMAGE_MAP } from './model/imageMap.ts';
import useWeatherStore from '../../../store/useWeatherStore.ts';

function WeatherImage() {
  const { weatherCondition } = useWeatherStore();

  return <img src={IMAGE_MAP[weatherCondition || 'cloudy']} alt="Weather image" />;
}

export default WeatherImage;
