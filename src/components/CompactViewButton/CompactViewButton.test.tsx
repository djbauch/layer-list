import React from 'react';
import ReactDOM from 'react-dom';
import CompactViewButton from './CompactViewButton';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompactViewButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});