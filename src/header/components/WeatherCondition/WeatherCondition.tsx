import useWeatherStore from '../../../store/useWeatherStore.ts';

function WeatherCondition() {
  const { weatherCondition } = useWeatherStore();

  const capitalisedWeatherCondition = weatherCondition
    ? weatherCondition.charAt(0).toUpperCase() + weatherCondition.slice(1)
    : 'Cloudy';

  return (
    <div className="flex pl-1 text-5xl font-medium text-white">{capitalisedWeatherCondition}</div>
  );
}

export default WeatherCondition;
