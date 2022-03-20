import React from 'react';
import ReactDOM from 'react-dom';
import LayerActionButton from './LayerActionButton';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LayerActionButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});