import React, { lazy, Suspense } from 'react';

const LazySortButton = lazy(() => import('./SortButton'));

const SortButton = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySortButton {...props} />
  </Suspense>
);

export default SortButton;
