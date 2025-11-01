import { configureStore } from '@reduxjs/toolkit';
import { rootPersistConfig, rootReducer, type RootReducer } from './persistance';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';
import { createLogger } from 'redux-logger';

const persistedReducer = persistReducer<RootReducer>(rootPersistConfig, rootReducer);

const reduxLogger = createLogger({
    collapsed: true,
    duration: true,
    colors: {
        title: () => '#0B698F',
        prevState: () => '#7286E9',
        action: () => '#bd2839',
        nextState: () => '#1DB954',
        error: () => '#FF534D',
    },
});

const middlewares = import.meta.env.DEV ? [reduxLogger] : [];

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }).concat(middlewares),
    devTools: import.meta.env.DEV,
});

export const persistor = persistStore(store);
const { dispatch } = store;

const useSelector = useAppSelector;
const useDispatch = () => useAppDispatch();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { dispatch, useSelector, useDispatch };