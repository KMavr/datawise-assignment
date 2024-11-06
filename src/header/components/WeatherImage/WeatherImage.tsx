import { IMAGE_MAP } from './model/imageMap.ts';
import useWeatherStore from '../../../store/useWeatherStore.ts';

function WeatherImage() {
  const { weatherCondition } = useWeatherStore();

  return (
    <img
      src={IMAGE_MAP[weatherCondition || 'cloudy']}
      alt="Weather image"
      className="h-60 w-60 md:h-80 md:w-80"
    />
  );
}

export default WeatherImage;
