import { useEffect, useState } from 'react';
import useWeatherStore from '../store/useWeatherStore.ts';
import cloudyBackground from '../assets/cloudyBackground.png';
import stormyBackground from '../assets/stormyBackground.png';
import sunnyBackground from '../assets/sunnyBackground.png';
import rainyBackground from '../assets/rainyBackground.png';

const useBackground = () => {
  const [background, setBackground] = useState<string>('');
  const { weatherCondition } = useWeatherStore();

  const backgroundImageMap = {
    cloudy: cloudyBackground,
    stormy: stormyBackground,
    sunny: sunnyBackground,
    rainy: rainyBackground,
  };
  // Assuming this will be fetched from server.

  useEffect(() => {
    // cloudy used as fallback.
    setBackground(backgroundImageMap[weatherCondition || 'cloudy']);
  }, [weatherCondition]);

  return background;
};

export default useBackground;
