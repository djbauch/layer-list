import React from 'react';
import ReactDOM from 'react-dom';
import LayerCard from './LayerCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LayerCard text='No Layer Text'/>, div);
  ReactDOM.unmountComponentAtNode(div);
});