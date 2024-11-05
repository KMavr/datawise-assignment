import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import '@mantine/carousel/styles.css';
import Header from './header/Header.tsx';
import WeatherAppHub from './pages/weather/WeatherAppHub.tsx';
import useBackground from './hooks/useBackground.ts';

function App() {
  const backgroundImage = useBackground();

  return (
    <MantineProvider>
      <div
        className="h-dvh bg-gray-500"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <Header />
        <Routes>
          <Route path="/" element={<WeatherAppHub />} />
          {/*Assuming each activity will navigate to a page with activity details*/}
          <Route path="/:activity-id" element={<div>Dummy Activity page</div>} />
        </Routes>
      </div>
    </MantineProvider>
  );
}

export default App;
