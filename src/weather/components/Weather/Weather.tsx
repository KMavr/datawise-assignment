import { getCurrentTimeIn12HourFormat } from '../../../utils/dateUtils.ts';
import clockIcon from '../../assets/clockIcon.svg';
import background from '../../assets/background.svg';
import WeatherCarousel from '../WeatherCarousel/WeatherCarousel.tsx';
import AirConditions from '../AirConditions/AirConditions.tsx';

function Weather() {
  const time = getCurrentTimeIn12HourFormat();

  return (
    <div
      className="hidden flex-[0.25] flex-col items-center justify-between rounded-[40px] bg-white bg-opacity-[27%] text-white md:flex"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom 40px',
        backgroundSize: 'contain',
        opacity: 0.87,
      }}>
      <div className="flex flex-[1/3] flex-col">
        <WeatherCarousel />
        <div className="mt-2 flex w-full flex-row items-center justify-center">
          <img src={clockIcon} />
          <span className="ml-1 text-lg font-medium">{time} GMT</span>
        </div>
      </div>
      <AirConditions />
    </div>
  );
}

export default Weather;
