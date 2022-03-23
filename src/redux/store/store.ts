import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {  layerApi } from '../portalinterface'

// The toolkit's configureStore method calls applyMiddleware and compose automatically
// It adds the redux-thunk middleware, and in development mode a check for mistakes
// like mutating the state
export const store = configureStore({
  reducer: {
    [layerApi.reducerPath]: layerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(layerApi.middleware)
})

setupListeners(store.dispatch)