import {rootReducer} from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: true,
    serializableCheck: true,
    thunk: true,
  }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
