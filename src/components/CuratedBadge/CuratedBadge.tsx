import React, { FC } from 'react';
import styles from './CuratedBadge.module.css';

interface CuratedBadgeProps {}

const CuratedBadge: FC<CuratedBadgeProps> = () => (
  <div className={styles.CuratedBadge}>
    CuratedBadge Component
  </div>
);

export default CuratedBadge;
