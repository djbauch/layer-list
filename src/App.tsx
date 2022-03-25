import React from 'react';
import './App.css';
import esriConfig from '@arcgis/core/config'
import { AppContainer } from './components/StyledComponents'
import LayerCard  from './components/LayerCard/LayerCard'
import Column from './components/Column/Column'
import AddItem from './components/AddItem/AddItem'

<link rel="stylesheet" href="/assets/esri/themes/light/main.css"></link>
const App = () => {
  esriConfig.assetsPath = './assets'
  return (
    <AppContainer>
      <Column text='Layers'>
      </Column>
    </AppContainer>
  );
}

export default App;
