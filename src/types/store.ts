import { store } from 'redux_/store';

export type WithoutPersist<T> = Omit<T, '_persist'>;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
