import React, { FC } from 'react';
import styles from './CompactViewButton.module.css';

interface CompactViewButtonProps {}

const CompactViewButton: FC<CompactViewButtonProps> = () => (
  <div className={styles.CompactViewButton}>
    CompactViewButton Component
  </div>
);

export default CompactViewButton;
