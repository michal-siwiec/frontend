import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer.js';

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [thunk]
});

export const persistor = persistStore(store);
