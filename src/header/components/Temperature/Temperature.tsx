import { formatDate } from '../../../utils/dateUtils.ts';
import useWeatherStore from '../../../store/useWeatherStore.ts';

function Temperature() {
  const { temperature } = useWeatherStore();
  const currentDate = new Date();
  const formattedDate = formatDate({
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })(currentDate).replace(' ', ' | ');

  return (
    <div className="flex flex-col items-center pl-1 text-white md:items-start">
      <span className="text-6xl font-medium">{`${temperature}°C`}</span>
      <span className="text-lg font-normal">{formattedDate}</span>
    </div>
  );
}

export default Temperature;
