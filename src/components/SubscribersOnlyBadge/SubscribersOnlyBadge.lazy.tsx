import React, { lazy, Suspense } from 'react';

const LazySubscribersOnlyBadge = lazy(() => import('./SubscribersOnlyBadge'));

const SubscribersOnlyBadge = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySubscribersOnlyBadge {...props} />
  </Suspense>
);

export default SubscribersOnlyBadge;
