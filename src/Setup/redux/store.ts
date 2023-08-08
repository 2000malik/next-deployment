
import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, FLUSH, PAUSE, PURGE, persistStore, REGISTER, REHYDRATE, PERSIST } from 'redux-persist'
import { rootReducer } from './RootReducer'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'pawwithfishstorage',
    version: 1.001,
    storage,
    blacklist: ["sidebar"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }),

    devTools: process.env.NODE_ENV !== 'production',
})


export const persistor = persistStore(store)
export default store;
export type AppDispatch = typeof store.dispatch