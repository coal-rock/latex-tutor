import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { HomePage } from './pages/Home.page';

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme='dark'>
      <HomePage/>
    </MantineProvider>
  );
}
