import React, {FC} from 'react';
import styles from './LayerCard.module.css';
import {LayerCardContainer } from '../StyledComponents'

type LayerCardProps =  LayerDescription

const LayerCard: FC<LayerCardProps> = (cardProps: LayerCardProps) => (
  <div className={styles.LayerCard}>
    <img alt="" className="esri-basemap-gallery__item-thumbnail" src={cardProps.thumbnail} />
    <LayerCardContainer>{cardProps.snippet}</LayerCardContainer>
  </div>
);

export default LayerCard;
