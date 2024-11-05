import { useEffect, useState } from 'react';

const useBackground = () => {
  const [background, setBackground] = useState<string>('');

  const backgroundImageMap = {
    cloudy: 'src/assets/cloudyBackground.svg',
    stormy: 'src/assets/stormyBackground.svg',
    sunny: 'src/assets/sunnyBackground.svg',
    rainy: 'src/assets/rainyBackground.svg',
  };
  // Assuming this will be fetched from server.
  const weatherCondition = 'rainy';

  useEffect(() => {
    setBackground(backgroundImageMap[weatherCondition]);
  }, [weatherCondition]);

  return background;
};

export default useBackground;
