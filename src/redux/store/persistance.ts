import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import authReducer from "@/redux/slices/authSlices/authSlice";
import sessionReducer from "@/redux/slices/sessionSlice/sessionSlice";


const encrypts = encryptTransform({
    secretKey: import.meta.env.VITE_REDUX_SECURE_STORAGE_HASH_KEY,
    onError: function (error) {
        console.error(error);
    },
})

const basePersistenceConfig = {
    keyPrefix: 'redux-',
    storage: storage,
    transforms: [encrypts]
}

const userPersistConfig = {
    key: 'user',
    storage: storage,
    keyPrefix: 'redux-',
    whitelist: ['isAuthenticated', 'user', 'permissions', 'role', 'organization'],
};
const rootPersistConfig = {
    ...basePersistenceConfig,
    key: 'root',
    whitelist: [],
};

const sessionPersistConfig = {
    ...basePersistenceConfig,
    key: 'session',
    whitelist: ['isAlive'],
};


const rootReducer = combineReducers({
    auth: persistReducer(userPersistConfig, authReducer),
    session: persistReducer(sessionPersistConfig, sessionReducer),

})

export { rootPersistConfig, rootReducer };
export type RootReducer = ReturnType<typeof rootReducer>;
