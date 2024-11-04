import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Header from './header/Header.tsx';

function App() {
  return (
    <MantineProvider>
      <div className="h-dvh bg-gray-500">
        <Header />
      </div>
    </MantineProvider>
  );
}

export default App;
