import React, { lazy, Suspense } from 'react';

const LazyListViewButton = lazy(() => import('./ListViewButton'));

const ListViewButton = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyListViewButton {...props} />
  </Suspense>
);

export default ListViewButton;
