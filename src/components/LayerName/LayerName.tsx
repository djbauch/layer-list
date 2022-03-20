import React, { FC } from 'react';
import styles from './LayerName.module.css';

interface LayerNameProps {}

const LayerName: FC<LayerNameProps> = () => (
  <div className={styles.LayerName}>
    LayerName Component
  </div>
);

export default LayerName;
