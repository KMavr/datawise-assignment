import NavBar from '../../navigation/components/NavBar/NavBar.tsx';
import Activities from '../../activities/components/Activities/Activities.tsx';
import Forecast from '../../forecast/components/Forecast/Forecast.tsx';
import Weather from '../../weather/components/Weather/Weather.tsx';
import WeatherCarousel from '../../weather/components/WeatherCarousel/WeatherCarousel.tsx';

function WeatherAppHub() {
  return (
    <div className="flex flex-1 flex-row justify-between gap-x-8 px-10 pt-5 md:pb-8">
      <NavBar />
      <div className="flex flex-1 flex-col gap-y-8">
        <Activities />
        <div className="md:hidden">
          <WeatherCarousel />
        </div>
        <Forecast />
      </div>
      <Weather />
    </div>
  );
}

export default WeatherAppHub;
