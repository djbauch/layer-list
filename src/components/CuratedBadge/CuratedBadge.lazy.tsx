import React, { lazy, Suspense } from 'react';

const LazyCuratedBadge = lazy(() => import('./CuratedBadge'));

const CuratedBadge = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCuratedBadge {...props} />
  </Suspense>
);

export default CuratedBadge;
