
"use client";

import { configureStore } from '@reduxjs/toolkit'
// import { persistReducer, FLUSH, PAUSE, PURGE, persistStore, REGISTER, REHYDRATE, PERSIST } from 'redux-persist'
import { rootReducer } from '@/setup/redux/root-reducer'
// import storage from 'redux-persist/lib/storage'
import { createWrapper } from "next-redux-wrapper"; ''

const makeConfiguredStore = () =>
    configureStore({
        reducer: rootReducer,
        devTools: true,
    });

export const store = () => {
    const isServer = typeof window === "undefined";
    if (isServer) {
        return makeConfiguredStore();
    } else {
        return makeConfiguredStore();

        // const persistConfig = {
        //     key: 'wokpa',
        //     version: 1.001,
        //     storage,
        //     blacklist: ["sidebar"]
        // }

        // const persistedReducer = persistReducer(persistConfig, rootReducer);
        // let store: any = configureStore({
        //     reducer: persistedReducer,
        //     devTools: process.env.NODE_ENV !== "production",
        // });
        // store.__persistor = persistStore(store); // Nasty hack
        // return store;
    }
};

// Previous codes 

// const store = () => configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
//             }
//         }),

//     devTools: process.env.NODE_ENV !== 'production',
// })

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;

export const wrapper = createWrapper<AppStore>(store);

// export const persistor = persistStore(store())
export default store;

const d = store().dispatch

export type AppDispatch = typeof d