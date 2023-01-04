
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import multiplierReducer from './multiplierSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    counter: counterReducer,
    multiplier: multiplierReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store =  configureStore({
    reducer: persistedReducer,
})
export let persistor = persistStore(store)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch