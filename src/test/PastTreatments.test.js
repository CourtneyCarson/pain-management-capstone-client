import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PastTreatments from '../08.PastTreatments/PastTreatments';

it('renders App component without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
          <PastTreatments />
    </BrowserRouter>
    ,div );
    ReactDOM.unmountComponentAtNode(div);
});
