import React from 'react';
import ReactDOM from 'react-dom';
import LayerName from './LayerName';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LayerName />, div);
  ReactDOM.unmountComponentAtNode(div);
});