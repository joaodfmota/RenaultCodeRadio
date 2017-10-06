import React from 'react';
import RX from 'reactxp';
import App from './src/App';

RX.App.initialize(true, true);
RX.UserInterface.setMainView(<App />);
