import React from 'react';
import ReactDOM from 'react-dom';
import CollapseControl from './CollapseControl';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CollapseControl />, div);
  ReactDOM.unmountComponentAtNode(div);
});