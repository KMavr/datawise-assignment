interface WeatherConditionProps {
  classes?: string;
}

function WeatherCondition({ classes = '' }: WeatherConditionProps) {
  const weather = 'Rainy';

  return <div className={`flex text-5xl font-medium text-white ${classes}`}>{weather}</div>;
}

export default WeatherCondition;
