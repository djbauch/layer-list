import React, { lazy, Suspense } from 'react';

const LazyCompactViewButton = lazy(() => import('./CompactViewButton'));

const CompactViewButton = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCompactViewButton {...props} />
  </Suspense>
);

export default CompactViewButton;
