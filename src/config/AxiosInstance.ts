// import { onShowNotification } from "@/redux/slices/notificationSlice/notificationSlice";
// import { handleSessionExpired } from "@/redux/slices/sessionSlice/sessionSlice";
// import unprocessedEntityHandler from "@/utils/unprocessedEntityHandler";
import axios, { AxiosError, type AxiosResponse } from "axios";
import secureLocalStorage from "react-secure-storage";

export let store: any

export const injectStore = (_store: any) => {
    store = _store
}

const axiosInstance = axios.create({
    baseURL: location.protocol + "//" + location.hostname + '/api/',
    timeout: 15000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});

export const setAuthToken = async (config: any) => {
    try {
        const token = secureLocalStorage.getItem(import.meta.env.VITE_VITE_AUTH_TOKEN || "@token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        } else {
            delete config.headers.Authorization;
        }
    } catch (error) {
        // saving error
    }
}

const responseHandler = (response: AxiosResponse) => {
    return response;
};

const errorHandler = async (error: AxiosError) => {
    try {
        if (error.code === AxiosError.ERR_NETWORK || error.code === AxiosError.ETIMEDOUT) {
            // await store.dispatch(onShowNotification({
            //     content: "Network error, check your Internet connection.",
            //     level: "ERROR",
            //     type: "NETWORK",
            // }));
        }
        if (error.response?.status === 401) {
            // await store.dispatch(onShowNotification({
            //     content: "Your session has expired.",
            //     level: "WARNING",
            //     type: "AUTH",
            // }));
            // await store.dispatch(handleSessionExpired());
        }
        if (error.response?.status === 500) {
            // await store.dispatch(onShowNotification({
            //     content: "Error has occurred, try again later.",
            //     level: "ALERT",
            //     type: "users",
            //     render: "NOTIFICATION"
            // }))
        }
        if (error.response && error.response?.status === 422) {
            // const data: any = error.response.data
            // unprocessedEntityHandler(data.detail, store)
        }

        return Promise.reject(error);
    } catch (error) {
        return Promise.reject(error);
    }
};



axiosInstance.interceptors.request.use(async function (config) {
    await setAuthToken(config);
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
    async (response) => responseHandler(response),
    async (error) => await errorHandler(error)
);
export default axiosInstance;