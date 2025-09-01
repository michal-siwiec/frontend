import { store } from 'redux_/store';

export type RootState = ReturnType<typeof store.getState>;
