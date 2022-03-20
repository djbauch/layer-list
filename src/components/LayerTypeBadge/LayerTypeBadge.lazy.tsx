import React, { lazy, Suspense } from 'react';

const LazyLayerTypeBadge = lazy(() => import('./LayerTypeBadge'));

const LayerTypeBadge = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLayerTypeBadge {...props} />
  </Suspense>
);

export default LayerTypeBadge;
