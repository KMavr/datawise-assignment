import { useState } from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import { CustomDot, CustomActiveDot, CustomCursor } from './components';

interface ForecastChartProps {
  data: {
    time: string;
    temperature: number;
    wind: number;
    weatherCondition: string;
  }[];
}

function ForecastChart({ data }: ForecastChartProps) {
  const [activeDotPosition, setActiveDotPosition] = useState<{ x: number; y: number } | null>(null);

  const isMobileView = window.innerWidth < 768;
  const adjustedData = isMobileView ? data.slice(0, 4) : data;

  const extendedData = [
    {
      time: '',
      temperature: data[0].temperature - 2,
      wind: null,
      weatherCondition: '',
      type: 'invisible',
    },
    ...adjustedData,
    {
      time: '',
      temperature: data.at(-1).temperature - 2,
      wind: null,
      weatherCondition: '',
      type: 'invisible',
    },
  ];

  return (
    <div className="flex flex-1 flex-col justify-center">
      <ResponsiveContainer width="100%" height="100%">
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
            dot={
              <CustomDot setActiveDotPosition={setActiveDotPosition} isMobileView={isMobileView} />
            }
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
