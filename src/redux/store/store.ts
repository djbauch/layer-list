import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {  layerApi } from '../portalinterface'

export const store = configureStore({
  reducer: {
    [layerApi.reducerPath]: layerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(layerApi.middleware)
})

setupListeners(store.dispatch)