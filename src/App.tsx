import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { MainLayout } from './components/MainLayout/MainLayut';
import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import { rootReducer } from './state/reducer';

const store = createStore(rootReducer);
const APP_TITLE="Jaszczur Feed"

const App: React.FC = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <MainLayout title={APP_TITLE} />
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
