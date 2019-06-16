import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import MainLayout from './components/MainLayout/MainLayut';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <MainLayout/>
  </ThemeProvider>
);

export default App;
