import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import HowTo from '../06.HowTo/HowTo';

it('renders App component without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
          <HowTo />
    </BrowserRouter>
    ,div );
    ReactDOM.unmountComponentAtNode(div);
});
