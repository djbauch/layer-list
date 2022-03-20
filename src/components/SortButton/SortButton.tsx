import React, { FC } from 'react';
import styles from './SortButton.module.css';

interface SortButtonProps {}

const SortButton: FC<SortButtonProps> = () => (
  <div className={styles.SortButton}>
    SortButton Component
  </div>
);

export default SortButton;
