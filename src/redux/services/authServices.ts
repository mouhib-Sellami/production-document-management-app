import axiosInstance from "@/config/AxiosInstance";

const API_PREFIX = "auth/"

const login = async (user: UserAuth) => {
    const { data } = await axiosInstance({
        method: "POST",
        url: API_PREFIX + "login/",
        data: user,
    });
    return data
};

const signup = async (values: FormData) => {
    const { data } = await axiosInstance.postForm(API_PREFIX + "signup/", values);
    return data
};

const logout = async () => {
    const { data } = await axiosInstance({
        method: "POST",
        url: API_PREFIX + "logout/",
    });
    return data
};

const retrieve = async () => {
    const { data } = await axiosInstance({
        method: "GET",
        url: API_PREFIX + "retrieve/",
    });
    return data
};

const forgetPasswordRequest = async (values: { email: string }) => {
    const { data } = await axiosInstance({
        method: "POST",
        url: API_PREFIX + "find/email/",
        data: values
    });
    return data
};

const verifyToken = async (values: { token: string }) => {
    const { data } = await axiosInstance({
        method: "POST",
        url: API_PREFIX + "token/verify/",
        data: values
    });
    return data
};

const resetPassword = async (values: resetPasswordRequest) => {
    const { data } = await axiosInstance({
        method: "POST",
        url: API_PREFIX + "reset/password/",
        data: values
    });
    return data
};


const authServices = {
    login,
    signup,
    logout,
    retrieve,
    forgetPasswordRequest,
    verifyToken,
    resetPassword
};

export default authServices;