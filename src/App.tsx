import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { HomePage } from './pages/Home.page';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme='dark'>
      <HomePage />
    </MantineProvider>
  );
}
