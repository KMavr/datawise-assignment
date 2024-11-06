import { Location, Temperature, WeatherCondition, WeatherImage } from './components';
import UserImage from '../navigation/components/components/UserImage/UserImage.tsx';

function Header() {
  return (
    <div className="flex flex-1 flex-col justify-between px-11 pt-6 md:flex-row">
      <div className="flex flex-col justify-between">
        <div className="hidden flex-[0.5] flex-col justify-evenly md:flex">
          <Location />
          <WeatherCondition />
        </div>
        <div className="mb-32 flex flex-[0.5] justify-between md:hidden">
          <Location />
          <UserImage />
        </div>
        <div className="flex justify-evenly md:hidden">
          <WeatherCondition />
        </div>
        <div className="flex flex-col items-center md:hidden md:items-end md:justify-center">
          <WeatherImage />
        </div>
        <div className="flex flex-[0.8] flex-col items-center md:items-start md:justify-end">
          <Temperature />
        </div>
      </div>
      <div className="hidden flex-col items-end justify-center md:flex">
        <WeatherImage />
      </div>
    </div>
  );
}

export default Header;
