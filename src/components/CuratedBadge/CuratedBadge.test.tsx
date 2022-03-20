import React from 'react';
import ReactDOM from 'react-dom';
import CuratedBadge from './CuratedBadge';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CuratedBadge />, div);
  ReactDOM.unmountComponentAtNode(div);
});