import { formatDate } from '../../../utils/dateUtils.ts';

interface TemperatureProps {
  classes?: string;
}

function Temperature({ classes }: TemperatureProps) {
  const temperature = 14;
  const currentDate = new Date();
  const formattedDate = formatDate({
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })(currentDate).replace(' ', ' | ');

  return (
    <div className={`flex flex-col text-white ${classes}`}>
      <span className="text-[64px] font-medium">{`${temperature}°C`}</span>
      <span className="text-lg font-normal">{formattedDate}</span>
    </div>
  );
}

export default Temperature;
