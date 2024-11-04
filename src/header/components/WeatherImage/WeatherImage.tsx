import { IMAGE_MAP } from './model/imageMap.ts';

function WeatherImage() {
  const weather = 'rainy';

  return <img src={IMAGE_MAP[weather]} alt="Weather image" />;
}

export default WeatherImage;
