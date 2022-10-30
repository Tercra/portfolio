import './App.css';
import twilight from './theme';

import { ThemeProvider } from '@mui/material';
import { Header, Introduction, Projects, Skills, Footer } from './components';

function App() {
  return (
    <>
      <ThemeProvider theme={twilight}>
        <Header />
        <div id="Top" className="section"></div>
        <Introduction />
        <Projects />
        <Skills />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
