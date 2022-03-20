import React, { lazy, Suspense } from 'react';

const LazySourceSelector = lazy(() => import('./SourceSelector'));

const SourceSelector = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySourceSelector {...props} />
  </Suspense>
);

export default SourceSelector;
