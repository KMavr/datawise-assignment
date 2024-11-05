import weather from '../assets/weather.svg';
import explore from '../assets/explore.svg';
import cities from '../assets/cities.svg';
import settings from '../assets/settings.svg';

// each route points at home. This would normally point to each correct route like /explore.
export const ROUTES = [
  { routeName: 'weather', route: '/', asset: weather },
  { routeName: 'explore', route: '/', asset: explore },
  { routeName: 'cities', route: '/', asset: cities },
  { routeName: 'settings', route: '/', asset: settings },
];
