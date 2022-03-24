import React from 'react';
import './App.css';
import { AppContainer } from './components/StyledComponents'
import LayerCard  from './components/LayerCard/LayerCard'
import Column from './components/Column/Column'
import AddItem from './components/AddItem/AddItem'

const App = () => {
  return (
    <AppContainer>
      <Column text='Layers'>
        <LayerCard>1st Card</LayerCard>
        <LayerCard>2nd Card</LayerCard>
      </Column>
    </AppContainer>
  );
}

export default App;
