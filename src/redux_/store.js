import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer.js';
import { isProductionEnv } from 'utils/environment.js';

export const store = configureStore({
  reducer: rootReducer,
  devTools: !isProductionEnv,
  middleware: [thunk]
});

export const persistor = persistStore(store);
