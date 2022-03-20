import React, { lazy, Suspense } from 'react';

const LazyLayerName = lazy(() => import('./LayerName'));

const LayerName = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLayerName {...props} />
  </Suspense>
);

export default LayerName;
