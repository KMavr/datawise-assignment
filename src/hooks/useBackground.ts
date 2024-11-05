import { useEffect, useState } from 'react';
import useWeatherStore from '../store/useWeatherStore.ts';

const useBackground = () => {
  const [background, setBackground] = useState<string>('');
  const { weatherCondition } = useWeatherStore();

  const backgroundImageMap = {
    cloudy: 'src/assets/cloudyBackground.svg',
    stormy: 'src/assets/stormyBackground.svg',
    sunny: 'src/assets/sunnyBackground.svg',
    rainy: 'src/assets/rainyBackground.svg',
  };
  // Assuming this will be fetched from server.

  useEffect(() => {
    // cloudy used as fallback.
    setBackground(backgroundImageMap[weatherCondition || 'cloudy']);
  }, [weatherCondition]);

  return background;
};

export default useBackground;
