import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { HomePage } from './pages/Home.page';

export default function App() {
  return (
    <MantineProvider defaultColorScheme='dark'>
      <HomePage />
    </MantineProvider>
  );
}
