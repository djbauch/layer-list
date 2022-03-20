import React, { FC } from 'react';
import styles from './FilterButton.module.css';

interface FilterButtonProps {}

const FilterButton: FC<FilterButtonProps> = () => (
  <div className={styles.FilterButton}>
    FilterButton Component
  </div>
);

export default FilterButton;
