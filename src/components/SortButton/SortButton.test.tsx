import React from 'react';
import ReactDOM from 'react-dom';
import SortButton from './SortButton';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SortButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});