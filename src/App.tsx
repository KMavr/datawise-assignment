import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import Header from './header/Header.tsx';
import WeatherAppHub from './pages/weather/WeatherAppHub.tsx';

function App() {
  return (
    <MantineProvider>
      <div className="h-dvh bg-gray-500">
        <Header />
        <Routes>
          <Route path="/" element={<WeatherAppHub />} />
        </Routes>
      </div>
    </MantineProvider>
  );
}

export default App;
