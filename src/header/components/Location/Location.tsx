import locationPin from './assets/location-pin.svg';
import rightArrow from './assets/right-arrow.svg';
import useWeatherStore from '../../../store/useWeatherStore.ts';

function Location() {
  const { location } = useWeatherStore();

  return (
    <button className="flex items-center bg-transparent text-lg font-medium text-[24] text-white">
      <img src={locationPin} alt="location pin" width={30} className="mr-2" />
      {location}
      <img src={rightArrow} alt="right arrow" width={9} className="ml-2" />
    </button>
  );
}

export default Location;
