/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './gesture-handler';
import store, {persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

const MainApp = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
