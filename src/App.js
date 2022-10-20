import './App.css';
import twilight from './theme';

import { ThemeProvider } from '@mui/material';
import { Header, Introduction } from './components';

function App() {
  return (
    <>
      <ThemeProvider theme={twilight}>
        <Header />
        <Introduction />
      </ThemeProvider>
    </>
  );
}

export default App;
