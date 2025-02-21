import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import postsReducer from './slices/postsSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ 
      thunk: false,
      serializableCheck: false
    }).concat(middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;