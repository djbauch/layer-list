import React from 'react';
import ReactDOM from 'react-dom';
import LayerModificationDate from './LayerModificationDate';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LayerModificationDate />, div);
  ReactDOM.unmountComponentAtNode(div);
});