import './App.css';
import twilight from './theme';

import { ThemeProvider } from '@mui/material';
import { Header, Introduction, Projects } from './components';

function App() {
  return (
    <>
      <ThemeProvider theme={twilight}>
        <Header />
        <Introduction />
        <Projects />
        <div style={{width:"50px", height:"1000px", backgroundColor:twilight.peach, border:"1px solid red"}}>hi</div>
      </ThemeProvider>
    </>
  );
}

export default App;
