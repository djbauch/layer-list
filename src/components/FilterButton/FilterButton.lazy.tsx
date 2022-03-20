import React, { lazy, Suspense } from 'react';

const LazyFilterButton = lazy(() => import('./FilterButton'));

const FilterButton = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFilterButton {...props} />
  </Suspense>
);

export default FilterButton;
