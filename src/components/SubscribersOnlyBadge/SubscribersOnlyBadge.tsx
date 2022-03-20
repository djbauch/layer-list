import React, { FC } from 'react';
import styles from './SubscribersOnlyBadge.module.css';

interface SubscribersOnlyBadgeProps {}

const SubscribersOnlyBadge: FC<SubscribersOnlyBadgeProps> = () => (
  <div className={styles.SubscribersOnlyBadge}>
    SubscribersOnlyBadge Component
  </div>
);

export default SubscribersOnlyBadge;
