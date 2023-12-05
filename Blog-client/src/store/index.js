import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { combineReducers } from "redux";
import authSlice from "./reducers/authSlice";
import blogSlice from "./reducers/blogSlice";

const persistConfig = {
    key: 'root',
    storage: storageSession
}

const rootReducer = combineReducers({
    auth: authSlice,
    blog: blogSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
