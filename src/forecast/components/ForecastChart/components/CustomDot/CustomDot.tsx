import { DotProps } from 'recharts';

const CustomDot = ({
  cx,
  cy,
  payload,
  setActiveDotPosition,
  isMobileView,
}: DotProps & {
  payload: {
    time: string;
    temperature: number;
    wind: number;
    weatherCondition: string;
    type?: string;
  };
  isMobileView: boolean;
  setActiveDotPosition: ({ x, y }: { x: number; y: number }) => void | null;
}) => {
  if (payload.type === 'invisible') {
    return null;
  }
  const adjustedCy = isMobileView ? Math.max(21, Math.min(cy, window.innerHeight - 100)) : cy;
  const cyIncrement = isMobileView ? 0 : 20;

  const fontSize = isMobileView ? 8 : 14;
  const fontWeight = isMobileView ? 400 : 500;

  return (
    <g onMouseEnter={() => setActiveDotPosition({ x: cx, y: adjustedCy })}>
      <text
        x={cx}
        y={adjustedCy - 10}
        textAnchor="middle"
        fill="#fff"
        fontSize={14}
        fontWeight={500}>
        {payload.temperature}°
      </text>
      <image
        href={payload.weatherCondition}
        width={20}
        height={20}
        x={cx - 10}
        y={adjustedCy + 5 + cyIncrement}
      />
      <text
        x={cx}
        y={adjustedCy + 43 + cyIncrement}
        textAnchor="middle"
        fill="#fff"
        fontSize={fontSize}
        fontWeight={fontWeight}>
        {payload.wind} km/h
      </text>
      <text
        x={cx}
        y={adjustedCy + 58 + cyIncrement}
        textAnchor="middle"
        fill="#fff"
        fontSize={fontSize}
        fontWeight={fontWeight}>
        {payload.time}
      </text>
    </g>
  );
};

export default CustomDot;
