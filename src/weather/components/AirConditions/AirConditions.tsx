import { CHANCE_OF_RAIN, TEMPERATURE, UV_INDEX, WIND_SPEED } from '../../model/unitsMap.ts';
import AirConditionsItem from './components/AirConditionsItem/AirConditionsItem.tsx';
import temperatureIcon from '../../assets/temperatureIcon.svg';
import rainIcon from '../../assets/rainIcon.svg';
import windIcon from '../../assets/windIcon.svg';
import uvIcon from '../../assets/uvIcon.svg';

function AirConditions() {
  //Assuming these will be fetched from server.

  const conditionsData = {
    temperature: 30,
    wind: 0.8,
    rainChance: 0.02,
    uv: 4,
  };

  // The data should be formatted in a more suitable place, for example before storing them to the store.
  const formattedData: {
    image: string;
    imageAlt: string;
    text: string;
    data: number;
    type: 'temperature' | 'wind-speed' | 'chance-of-rain' | 'uv-index';
  }[] = [
    {
      data: conditionsData.temperature,
      type: TEMPERATURE,
      text: 'Real Feel',
      image: temperatureIcon,
      imageAlt: 'temperature icon',
    },
    {
      data: conditionsData.wind,
      type: WIND_SPEED,
      text: 'Wind',
      image: windIcon,
      imageAlt: 'wind icon',
    },
    {
      data: conditionsData.rainChance * 100,
      type: CHANCE_OF_RAIN,
      text: 'Chance of rain',
      image: rainIcon,
      imageAlt: 'chance of rain icon',
    },
    {
      data: conditionsData.uv,
      type: UV_INDEX,
      text: 'UV Index',
      image: uvIcon,
      imageAlt: 'UV Index icon',
    },
  ];

  return (
    <div className="mt-8 flex w-full flex-1 flex-col pl-4">
      <span className="text-sm font-bold">AIR CONDITIONS</span>
      <div className="flex flex-[0.8] flex-col justify-around">
        {formattedData.map((props) => (
          <AirConditionsItem {...props} />
        ))}
      </div>
    </div>
  );
}

export default AirConditions;
