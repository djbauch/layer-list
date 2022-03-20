import React, { FC } from 'react';
import styles from './AuthoritativeBadge.module.css';

interface AuthoritativeBadgeProps {}

const AuthoritativeBadge: FC<AuthoritativeBadgeProps> = () => (
  <div className={styles.AuthoritativeBadge}>
    AuthoritativeBadge Component
  </div>
);

export default AuthoritativeBadge;
