import React from 'react';
import ReactDOM from 'react-dom';
import SubscribersOnlyBadge from './SubscribersOnlyBadge';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SubscribersOnlyBadge />, div);
  ReactDOM.unmountComponentAtNode(div);
});