import React, { lazy, Suspense } from 'react';

const LazySearchBox = lazy(() => import('./SearchBox'));

const SearchBox = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySearchBox {...props} />
  </Suspense>
);

export default SearchBox;
