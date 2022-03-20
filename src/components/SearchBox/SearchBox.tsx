import React, { FC } from 'react';
import styles from './SearchBox.module.css';

interface SearchBoxProps {}

const SearchBox: FC<SearchBoxProps> = () => (
  <div className={styles.SearchBox}>
    SearchBox Component
  </div>
);

export default SearchBox;
