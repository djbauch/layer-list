import React, { FC } from 'react';
import styles from './LayerActionButton.module.css';

interface LayerActionButtonProps {}

const LayerActionButton: FC<LayerActionButtonProps> = () => (
  <div className={styles.LayerActionButton}>
    LayerActionButton Component
  </div>
);

export default LayerActionButton;
