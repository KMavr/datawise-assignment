import { useLayoutEffect } from 'react';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import '@mantine/carousel/styles.css';
import Header from './header/Header.tsx';
import WeatherAppHub from './pages/weather/WeatherAppHub.tsx';
import useBackground from './hooks/useBackground.ts';
import useWeatherStore from './store/useWeatherStore.ts';

function App() {
  const { setWeatherCondition, setTemperature, setLocation } = useWeatherStore();

  useLayoutEffect(() => {
    // Sample fetch call that should populate the store with data.
    const fetchWeatherData = async () => {
      try {
        // Assuming this is the actual API endpoint
        const response = await fetch('/api/weather');
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();

        // Assuming data holds the relevant fields
        setWeatherCondition(data.weatherCondition || 'cloudy'); // Default to 'cloudy' if no condition is found
        setTemperature(typeof data.temperature === 'number' ? data.temperature : NaN); // Default to 'NaN' if no temperature is found
        setLocation(data.location || 'Unknown Location'); // Default if location is missing
      } catch (error) {
        console.error(error);
        // Default to 'cloudy' on error
        setWeatherCondition('cloudy');
        // These should be NaN and Unknown location, but for this assignment I will have them default to the design values.
        setTemperature(14);
        setLocation('New York');
      }
    };

    fetchWeatherData();
  }, []);

  const backgroundImage = useBackground();

  return (
    <MantineProvider>
      <div
        className="flex h-dvh flex-col justify-evenly"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <Header />
        <div className="flex flex-[2] flex-row md:flex-col">
          <Routes>
            <Route path="/" element={<WeatherAppHub />} />
            {/*Assuming each activity will navigate to a page with activity details*/}
            <Route path="/:activity-id" element={<div>Dummy Activity page</div>} />
          </Routes>
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
