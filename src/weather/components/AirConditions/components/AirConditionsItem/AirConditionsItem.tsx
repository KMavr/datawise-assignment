import { UNITS_MAP } from '../../../../model/unitsMap.ts';

interface AirConditionsItemProps {
  image: string;
  imageAlt: string;
  text: string;
  data: number;
  type: 'temperature' | 'wind-speed' | 'chance-of-rain' | 'uv-index';
}

function AirConditionsItem({ image, imageAlt, text, data, type }: AirConditionsItemProps) {
  const unit = UNITS_MAP[type];

  return (
    <div className="flex flex-row items-start">
      <img src={image} alt={imageAlt} width={25} />
      <div className="ml-1 flex flex-col pt-1">
        <span className="text-xs font-medium">{text}</span>
        <span className="text-sm font-medium">{`${data}${unit}`}</span>
      </div>
    </div>
  );
}

export default AirConditionsItem;
