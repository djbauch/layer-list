import React from 'react';
import ReactDOM from 'react-dom';
import LayerTypeBadge from './LayerTypeBadge';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LayerTypeBadge />, div);
  ReactDOM.unmountComponentAtNode(div);
});