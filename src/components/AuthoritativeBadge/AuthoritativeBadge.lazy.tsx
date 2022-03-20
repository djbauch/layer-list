import React, { lazy, Suspense } from 'react';

const LazyAuthoritativeBadge = lazy(() => import('./AuthoritativeBadge'));

const AuthoritativeBadge = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAuthoritativeBadge {...props} />
  </Suspense>
);

export default AuthoritativeBadge;
