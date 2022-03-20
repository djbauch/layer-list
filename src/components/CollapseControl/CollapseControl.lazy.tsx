import React, { lazy, Suspense } from 'react';

const LazyCollapseControl = lazy(() => import('./CollapseControl'));

const CollapseControl = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCollapseControl {...props} />
  </Suspense>
);

export default CollapseControl;
