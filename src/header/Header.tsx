import { Location, Temperature, WeatherCondition, WeatherImage } from './components';

function Header() {
  return (
    <div className="flex flex-1 flex-row justify-between px-11 pt-6">
      <div className="flex flex-col justify-between">
        <div className="flex flex-[0.5] flex-col justify-evenly">
          <Location />
          <WeatherCondition />
        </div>
        <div className="flex flex-[0.8] flex-col justify-end">
          <Temperature />
        </div>
      </div>
      <div className="flex flex-col items-end justify-center">
        <WeatherImage />
      </div>
    </div>
  );
}

export default Header;
