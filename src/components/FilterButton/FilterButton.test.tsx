import React from 'react';
import ReactDOM from 'react-dom';
import FilterButton from './FilterButton';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilterButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});