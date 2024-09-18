import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { favoriteReducer } from './favorite/slice';
import { carsReducer } from './cars/slice';
import { modalReducer } from './modal/slice';
import { filterReducer } from './filter/slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whiteList: ['favorite'],
};

const persistedReducer = persistReducer(persistConfig, favoriteReducer);

export const store = configureStore({
  reducer: {
    favorite: persistedReducer,
    cars: carsReducer,
    modal: modalReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
