import { configureStore, combineReducers } from "@reduxjs/toolkit";
import crestReducers from "./crest.reducers";

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
// import logger from "redux-logger";


const persistConfig = {
    key: "root",
    version: 1,
    storage: AsyncStorage,
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
});

export default store;
