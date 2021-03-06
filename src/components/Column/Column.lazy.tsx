import React, { lazy, Suspense } from 'react';

const LazyColumn = lazy(() => import('./Column'));

const Column = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyColumn text='Column Loading' {...props} />
  </Suspense>
);

export default Column;
