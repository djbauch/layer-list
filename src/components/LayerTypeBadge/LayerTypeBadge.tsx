import React, { FC } from 'react';
import styles from './LayerTypeBadge.module.css';

interface LayerTypeBadgeProps {}

const LayerTypeBadge: FC<LayerTypeBadgeProps> = () => (
  <div className={styles.LayerTypeBadge}>
    LayerTypeBadge Component
  </div>
);

export default LayerTypeBadge;
