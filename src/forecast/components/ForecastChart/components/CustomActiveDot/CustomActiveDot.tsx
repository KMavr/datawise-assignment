import { DotProps } from 'recharts';

const CustomActiveDot = ({
  cx = 0,
  cy = 0,
  r,
  payload,
  activeDotPosition,
  setActiveDotPosition,
}: DotProps & {
  payload: {
    time: string;
    temperature: number;
    wind: number;
    weatherCondition: string;
    type?: string;
  };
  activeDotPosition: { x: number; y: number } | null;
  setActiveDotPosition: ({ x, y }: { x: number; y: number }) => void | null;
}) => {
  if (payload.type === 'invisible') {
    return null;
  }

  if (activeDotPosition?.x !== cx && activeDotPosition?.y !== cy) {
    setActiveDotPosition({ x: cx, y: cy });
  }

  return <circle cx={cx} cy={cy} r={r} fill={'#FFF'} stroke={'#FFF'} strokeWidth={1} />;
};

export default CustomActiveDot;
