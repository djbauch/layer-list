import React, { lazy, Suspense } from 'react';

const LazyLayerActionButton = lazy(() => import('./LayerActionButton'));

const LayerActionButton = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLayerActionButton {...props} />
  </Suspense>
);

export default LayerActionButton;
