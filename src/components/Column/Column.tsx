import React, { FC } from 'react';
import AddItem from '../AddItem/AddItem';
import { ColumnContainer, ColumnLabel, LayerCardContainer } from '../StyledComponents';
import styles from './Column.module.css';

interface ColumnProps {
  text: string
}

const Column: FC<ColumnProps> = ({text}: ColumnProps) => (
  <div className={styles.Column}>
    <ColumnContainer>
      <ColumnLabel>{text}</ColumnLabel>
      <LayerCardContainer>Layer 1</LayerCardContainer>
      <LayerCardContainer>Layer 2</LayerCardContainer>
      <AddItem toggleButtonText='+ Add Layer' onAdd={console.log} dark />
    </ColumnContainer>
  </div>
);

export default Column;
