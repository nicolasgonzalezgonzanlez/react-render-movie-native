import React from 'react';
import Root from './route/Route';
import { Provider } from 'react-redux';
import store from './core/index';
import { Provider as PaperProvider } from 'react-native-paper';
import Snackbar from './components/snackbar/Snackbar';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
          <Snackbar />
          <Root />
      </PaperProvider>
    </Provider>
  );
}
