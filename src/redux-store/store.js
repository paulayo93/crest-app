import { configureStore, combineReducers } from "@reduxjs/toolkit";
import crestReducers from "./crest.reducers";
import logger from "redux-logger";

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";


const persistConfig = {
    key: "root",
    version: 1,
    storage: AsyncStorage,
    blacklist: ['isLoggedIn']
};

const rootReducer = combineReducers({
    crest: crestReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
        // .concat(logger)
});

export default store;
