import React, {FC} from 'react';
import styles from './LayerCard.module.css';
import {LayerCardContainer } from '../StyledComponents'

type LayerCardProps = { text: string}

const LayerCard: React.FC = ({children}) => (
  <div className={styles.LayerCard}>
    <LayerCardContainer>{children}</LayerCardContainer>
  </div>
);

export default LayerCard;
