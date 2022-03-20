import React, { FC } from 'react';
import { ColumnContainer, ColumnLabel } from '../StyledComponents';
import styles from './Column.module.css';

interface ColumnProps {
  text: string
}

const Column: FC<ColumnProps> = ({text}: ColumnProps) => (
  <div className={styles.Column}>
    <ColumnContainer>
      <ColumnLabel>{text}</ColumnLabel>
    </ColumnContainer>
  </div>
);

export default Column;
