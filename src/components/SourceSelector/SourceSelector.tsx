import React, { FC } from 'react';
import styles from './SourceSelector.module.css';

interface SourceSelectorProps {}

const SourceSelector: FC<SourceSelectorProps> = () => (
  <div className={styles.SourceSelector}>
    SourceSelector Component
  </div>
);

export default SourceSelector;
