import React, { FC } from 'react';
import styles from './LayerCard.module.css';
import {LayerCardContainer } from '../StyledComponents'

interface LayerCardProps { text: string}

const LayerCard: FC<LayerCardProps> = ({text}: LayerCardProps) => (
  <div className={styles.LayerCard}>
    <LayerCardContainer>{text}</LayerCardContainer>
  </div>
);

export default LayerCard;
