import { ThemeProvider } from 'styled-components';
import light from '../styles/themes/light';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes';

function App() {
  return (
    <ThemeProvider theme={light}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
