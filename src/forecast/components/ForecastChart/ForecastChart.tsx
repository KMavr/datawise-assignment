import { useState } from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

interface ForecastChartProps {
  data: {
    time: string; //  Normally the data should be formatted before reaching this point.
    temperature: number;
    wind: number;
    weatherCondition: string;
  }[];
}

const CustomDot = ({
  cx,
  cy,
  payload,
  setActiveDotPosition,
}: {
  cx: number;
  cy: number;
  payload: {
    time: string;
    temperature: number;
    wind: number;
    weatherCondition: string;
    type?: string;
  };
  setActiveDotPosition: ({ x, y }: { x: number; y: number }) => void | null;
}) => {
  if (payload.type === 'invisible') {
    return null;
  }

  return (
    <g onMouseEnter={() => setActiveDotPosition({ x: cx, y: cy })}>
      <text x={cx} y={cy - 10} textAnchor="middle" fill="#fff" fontSize={14} fontWeight={500}>
        {payload.temperature}°
      </text>
      <image href={payload.weatherCondition} width={20} height={20} x={cx - 10} y={cy + 25} />
      <text x={cx} y={cy + 63} textAnchor="middle" fill="#fff" fontSize={14} fontWeight={500}>
        {payload.wind} km/h
      </text>
      <text x={cx} y={cy + 78} textAnchor="middle" fill="#fff" fontSize={14} fontWeight={500}>
        {payload.time}
      </text>
    </g>
  );
};

const CustomActiveDot = ({
  cx,
  cy,
  r,
  payload,
  activeDotPosition,
  setActiveDotPosition,
}: {
  cx: number;
  cy: number;
  r: number;
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

const CustomCursor = ({
  activeDotPosition,
}: {
  activeDotPosition: { x: number; y: number } | null;
}) => {
  if (!activeDotPosition) return null;

  const { x, y } = activeDotPosition;

  return (
    <svg>
      <line
        x1={x}
        y1={y}
        x2={x}
        y2={y + 25}
        stroke="#FFC355"
        strokeDasharray="3 3"
        strokeWidth={1}
      />
    </svg>
  );
};

function ForecastChart({ data }: ForecastChartProps) {
  const [activeDotPosition, setActiveDotPosition] = useState<{ x: number; y: number } | null>(null);

  const extendedData = [
    {
      time: '',
      temperature: data[0].temperature - 2,
      wind: null,
      weatherCondition: '',
      type: 'invisible',
    },
    ...data,
    {
      time: '',
      temperature: data.at(-1).temperature - 2,
      wind: null,
      weatherCondition: '',
      type: 'invisible',
    },
  ];

  return (
    <div className="relative h-full w-full text-white">
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={extendedData}
          dataKey="temperature"
          onMouseLeave={() => {
            setActiveDotPosition(null);
          }}>
          <Line
            type="natural"
            dataKey="temperature"
            stroke="#FFC355"
            connectNulls
            dot={<CustomDot setActiveDotPosition={setActiveDotPosition} />}
            activeDot={
              <CustomActiveDot
                activeDotPosition={activeDotPosition}
                setActiveDotPosition={setActiveDotPosition}
              />
            }
            isAnimationActive={false}
          />
          <Tooltip
            cursor={<CustomCursor activeDotPosition={activeDotPosition} />}
            content={() => null}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ForecastChart;
