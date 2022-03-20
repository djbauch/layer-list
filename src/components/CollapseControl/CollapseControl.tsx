import React, { FC } from 'react';
import styles from './CollapseControl.module.css';

interface CollapseControlProps {}

const CollapseControl: FC<CollapseControlProps> = () => (
  <div className={styles.CollapseControl}>
    CollapseControl Component
  </div>
);

export default CollapseControl;
