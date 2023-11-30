import { configureStore } from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist"
import authSlice from "./reducers/authSlice";
import storageSession from "redux-persist/lib/storage/session"


const persistConfig = {
    key: 'root',
    storage: storageSession
}


const persistedReducer = persistReducer(persistConfig, authSlice)

const store = configureStore({
    reducer: {
        auth: persistedReducer
    }
})

export const persistor = persistStore(store)
export default store