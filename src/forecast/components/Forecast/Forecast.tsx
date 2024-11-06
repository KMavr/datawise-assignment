import clockIcon from '../../../weather/assets/clockIcon.svg';
import ForecastChart from '../ForecastChart/ForecastChart.tsx';
import { mockData } from './__mocks__/mockData.ts';
import { IMAGE_MAP } from '../../model/imageMap.ts';

function Forecast() {
  const formattedData = mockData.map((data) => ({
    ...data,
    weatherCondition: IMAGE_MAP[data.weatherCondition],
  }));

  return (
    <div className="flex h-full flex-col justify-around rounded-[40px] bg-white bg-opacity-[27%] md:justify-between">
      <div className="mb-1 mt-1 flex flex-row px-8">
        <img src={clockIcon} alt="forecast clock icon" />
        <span className="ml-1 text-sm font-medium text-white">24-hour forecast</span>
      </div>
      <ForecastChart data={formattedData} />
      <button
        style={{ backgroundColor: '#EACA8F', alignSelf: 'center' }}
        className="mb-1 w-1/2 rounded-[40px] text-white md:hidden">
        5-day forecast
      </button>
    </div>
  );
}

export default Forecast;
