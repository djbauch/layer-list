import React from 'react';
import ReactDOM from 'react-dom';
import SourceSelector from './SourceSelector';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SourceSelector />, div);
  ReactDOM.unmountComponentAtNode(div);
});