import React, { lazy, Suspense } from 'react';

const LazyLayerModificationDate = lazy(() => import('./LayerModificationDate'));

const LayerModificationDate = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLayerModificationDate {...props} />
  </Suspense>
);

export default LayerModificationDate;
