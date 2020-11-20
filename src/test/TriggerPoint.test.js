import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TriggerPoint from '../07.TriggerPoint/TriggerPoint'


const match = { params: { id: 1 } }

it('renders without crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <TriggerPoint match={match} />
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});