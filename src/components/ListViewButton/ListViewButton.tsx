import React, { FC } from 'react';
import styles from './ListViewButton.module.css';

interface ListViewButtonProps {}

const ListViewButton: FC<ListViewButtonProps> = () => (
  <div className={styles.ListViewButton}>
    ListViewButton Component
  </div>
);

export default ListViewButton;
