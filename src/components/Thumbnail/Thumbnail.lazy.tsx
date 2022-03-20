import React, { lazy, Suspense } from 'react';

const LazyThumbnail = lazy(() => import('./Thumbnail'));

const Thumbnail = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyThumbnail {...props} />
  </Suspense>
);

export default Thumbnail;
