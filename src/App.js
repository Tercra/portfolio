import './App.css';
import twilight from './theme';

import { Box, ThemeProvider } from '@mui/material';
import Header from './components/header';

function App() {
  return (
    <>
      <ThemeProvider theme={twilight}>
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
