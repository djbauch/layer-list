import React, {FC} from 'react';
import styles from './LayerCard.module.css';
import {LayerCardContainer } from '../StyledComponents'

type LayerCardProps =  LayerDescription

const LayerCard: FC<LayerCardProps> = (cardProps: LayerCardProps) => (
  <div className="esri-basemap-gallery__item">
    <img alt="" className="esri-basemap-gallery__item-thumbnail" src={cardProps.thumbnail} />
    <div className="esri-basemap-gallery__item-title">
      <strong>{cardProps.title}</strong><br/>
    Owner: {cardProps.owner}<br/>
    Type: {cardProps.type} | Views: {cardProps.numViews.toLocaleString()}<br/>
    Created: {new Date(cardProps.created).toLocaleDateString("en")} |
    Last modified: {new Date(cardProps.modified).toLocaleDateString("en")}<br/>
    Item ID: {cardProps.id}
    </div>
  </div>
);

export default LayerCard;
