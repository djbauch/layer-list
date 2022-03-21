import React from 'react';
import './App.css';
import { AppContainer, ColumnContainer, LayerCardContainer } from './components/StyledComponents'
import Column from './components/Column/Column'
import AddItem from './components/AddItem/AddItem'
function App() {
  return (
    <AppContainer>
      <Column text='Layers'>
        <LayerCardContainer>1st Card</LayerCardContainer>
        <LayerCardContainer>2nd Card</LayerCardContainer>
      </Column>
    </AppContainer>
  );
}

export default App;
