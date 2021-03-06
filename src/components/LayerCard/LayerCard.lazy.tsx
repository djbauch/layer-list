import React, { lazy, Suspense } from 'react';

const LazyLayerCard = lazy(() => import('./LayerCard'));

const LayerCard = (props: JSX.IntrinsicAttributes & LayerDescription & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLayerCard {...props} />
  </Suspense>
);

export default LayerCard;
