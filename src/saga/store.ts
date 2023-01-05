import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist';
// ...
import { helloSaga } from './sagas'
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
import storage from 'redux-persist/lib/storage';

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware];
const persistConfig = { key: 'root', storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware,
});
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch