import useWeatherStore from '../../../store/useWeatherStore.ts';

interface WeatherConditionProps {
  classes?: string;
}

function WeatherCondition({ classes = '' }: WeatherConditionProps) {
  const { weatherCondition } = useWeatherStore();

  const capitalisedWeatherCondition = weatherCondition
    ? weatherCondition.charAt(0).toUpperCase() + weatherCondition.slice(1)
    : 'Cloudy';

  return (
    <div className={`flex text-5xl font-medium text-white ${classes}`}>
      {capitalisedWeatherCondition}
    </div>
  );
}

export default WeatherCondition;
