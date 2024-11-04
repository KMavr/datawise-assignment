import locationPin from './assets/location-pin.svg';
import rightArrow from './assets/right-arrow.svg';

interface LocationProps {
  classes?: string;
}

function Location({ classes = '' }: LocationProps) {
  const location = 'New York';

  return (
    <button
      className={`flex items-center bg-transparent text-lg font-medium text-[24] text-white ${classes}`}>
      <img src={locationPin} alt="location pin" width={30} className="mr-2" />
      {location}
      <img src={rightArrow} alt="right arrow" width={9} className="ml-2" />
    </button>
  );
}

export default Location;
