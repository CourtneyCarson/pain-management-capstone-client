import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AboutPage from '../05.About/AboutPage';

it('renders App component without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
          <AboutPage />
    </BrowserRouter>
    ,div );
    ReactDOM.unmountComponentAtNode(div);
});
