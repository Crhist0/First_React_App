import './css/App.css';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
function App() {
  return (
    <>
      <ThemeProvider theme={themes.light}>
        <GlobalStyle />
        <Router></Router>
      </ThemeProvider>
    </>
  );
}

export default App;

const themes = {
  dark: {
    bgColor: '#333335',
    textColor: '#f8f9fb',
    shadowColor: '10px 5px 5px #f8f9fb',
  },
  light: {
    bgColor: '#f8f9fb',
    textColor: '#333335',
    shadowColor: '10px 5px 5px black',
  },
};
