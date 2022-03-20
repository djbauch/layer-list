import React from 'react';
import ReactDOM from 'react-dom';
import ListViewButton from './ListViewButton';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListViewButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});