import './css/App.css';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Fab from '@mui/material/Fab';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function App() {
  const [theme, setTheme] = useState(themes.light);

  const handleClick = (e) => {
    let { name } = e.target;
    if (name === 'light') {
      setTheme(themes.dark);
      e.target.name = 'dark';
    } else if (name === 'dark') {
      setTheme(themes.light);
      e.target.name = 'light';
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div
          style={{
            position: 'fixed',
            top: '50px',
            right: '40px',
            zIndex: '999',
          }}
        >
          <Fab name='light' onClick={handleClick}>
            {theme.name === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </Fab>
        </div>
        <Router></Router>
      </ThemeProvider>
    </>
  );
}

export default App;

const darkTheme = {
  name: 'dark',
  bgColor: '#333335',
  bgColorSecondary: '#4c4c4e',
  textColor: '#f8f9fb',
  shadowColor: '10px 5px 5px #f8f9fb',
};
const lightTheme = {
  name: 'light',
  bgColor: '#f8f9fb',
  bgColorSecondary: '#d1d2d4',
  textColor: '#333335',
  shadowColor: '10px 5px 5px black',
};
export const themes = {
  dark: darkTheme,
  light: lightTheme,
};
