import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';

export const context = createContext(null); // создали context для store и прокинули его ниже

ReactDOM.render(
  <context.Provider
    value={{
      user: new UserStore(),
      device: new DeviceStore(),
    }}
  >
    <App />
  </context.Provider>,
  document.getElementById('root')
);
