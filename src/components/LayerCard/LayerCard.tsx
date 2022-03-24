import React, {FC} from 'react';
import styles from './LayerCard.module.css';
import {LayerCardContainer } from '../StyledComponents'

type LayerCardProps =  LayerDescription

const LayerCard: FC<LayerCardProps> = (cardProps: LayerCardProps) => (
  <div className={styles.LayerCard}>
    <LayerCardContainer>{cardProps.snippet}</LayerCardContainer>
  </div>
);

export default LayerCard;
