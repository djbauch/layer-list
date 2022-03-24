import React, { FC } from 'react';
import AddItem from '../AddItem/AddItem';
import { ColumnContainer, ColumnLabel, LayerCardContainer } from '../StyledComponents';
import LayerCard from '../LayerCard/LayerCard'
import styles from './Column.module.css';
import testData from '../../stories/bouldertest.json'
import { useGetAllLayersQuery } from '../../redux/portalinterface'
interface ColumnProps {
  text: string
}

const appData: LayerDescription[] = testData.results;

const Column: FC<ColumnProps> = ({text}: ColumnProps) => {
  const layers = appData

  return(<div className={styles.Column}>
    <ColumnContainer>
      <ColumnLabel>{text}</ColumnLabel>
      {layers.map((layerDesc, layerId) => (
        <LayerCard {...layerDesc} key={layerId}/>
      ))}
      <LayerCardContainer>Layer 1</LayerCardContainer>
      <LayerCardContainer>Layer 2</LayerCardContainer>
      <AddItem toggleButtonText='+ Add Layer' onAdd={console.log} dark />
    </ColumnContainer>
  </div>)
};

export default Column;
