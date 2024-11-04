import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Header from './header/Header.tsx';
import AppHub from './appHub/AppHub.tsx';

function App() {
  return (
    <MantineProvider>
      <div className="h-dvh bg-gray-500">
        <Header />
        <AppHub />
      </div>
    </MantineProvider>
  );
}

export default App;
