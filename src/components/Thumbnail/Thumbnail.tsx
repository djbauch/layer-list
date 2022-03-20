import React, { FC } from 'react';
import styles from './Thumbnail.module.css';

interface ThumbnailProps {}

const Thumbnail: FC<ThumbnailProps> = () => (
  <div className={styles.Thumbnail}>
    Thumbnail Component
  </div>
);

export default Thumbnail;
