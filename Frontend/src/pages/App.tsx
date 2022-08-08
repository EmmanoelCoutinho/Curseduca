import { ThemeProvider } from 'styled-components';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes';

function App() {
  const theme = localStorage.getItem('theme');

  if (theme === null) {
    localStorage.setItem('theme', 'light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
