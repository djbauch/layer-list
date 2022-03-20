import React from 'react';
import ReactDOM from 'react-dom';
import AuthoritativeBadge from './AuthoritativeBadge';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthoritativeBadge />, div);
  ReactDOM.unmountComponentAtNode(div);
});