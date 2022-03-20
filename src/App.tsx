import React from 'react';
import './App.css';
import {AppContainer, ColumnContainer, LayerCardContainer} from './components/StyledComponents'
function App() {
  return (
    <AppContainer>
      <ColumnContainer>
      <LayerCardContainer>1st Card</LayerCardContainer>
      <LayerCardContainer>2nd Card</LayerCardContainer>
      </ColumnContainer>
      </AppContainer>
  );
}

export default App;
