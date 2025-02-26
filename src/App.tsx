import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { HomePage } from './pages/Home.page';
import { theme } from './theme';
import { MathJaxContext } from 'better-react-mathjax';

export default function App() {
  return (
    <MathJaxContext>
      <MantineProvider theme={theme} defaultColorScheme='dark'>
        <HomePage />
      </MantineProvider>
    </MathJaxContext>
  );
}
