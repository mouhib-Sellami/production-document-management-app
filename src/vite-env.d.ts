/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_VITE_AUTH_TOKEN: string;
    readonly VITE_BASE_SERVER_API_URL: string;
    readonly VITE_SECURE_LOCAL_STORAGE_PREFIX: string;
    readonly VITE_REDUX_SECURE_STORAGE_HASH_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

declare module 'moment/locale/fr';
declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.json';
declare module '*.mp4';