import { Location, Temperature, WeatherCondition, WeatherImage } from './components';

function Header() {
  return (
    <div className="grid h-1/3 grid-cols-2 px-11 pt-6">
      <div className="grid h-full grid-rows-[auto,auto,1fr] items-center">
        <Location classes="mb-10" />
        <WeatherCondition classes="ml-1" />
        <Temperature classes="ml-1" />
      </div>
      <div className="flex flex-col items-end justify-center">
        <WeatherImage />
      </div>
    </div>
  );
}

export default Header;
