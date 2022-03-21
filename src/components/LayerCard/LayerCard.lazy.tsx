import React, { lazy, Suspense } from 'react';

const LazyLayerCard = lazy(() => import('./LayerCard'));

const LayerCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLayerCard text='Card Loading' {...props} />
  </Suspense>
);

export default LayerCard;
