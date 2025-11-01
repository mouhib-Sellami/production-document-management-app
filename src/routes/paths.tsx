function path(root: string, sublink: string) {
    return `${root}${sublink}`;
}

const ROOTS_AUTH = '';
const ROOTS_APP = '';

export const PATH_AUTH = {
    login: path(ROOTS_AUTH, '/'),
    register: path(ROOTS_AUTH, '/register'),
    forgetPassword: path(ROOTS_AUTH, '/forget-password'),
    resetPassword: path(ROOTS_AUTH, '/reset/password/:token'),
}

export const PATH_APP = {
    root: ROOTS_APP,
    general: {
        dashboard: {
            home: path(ROOTS_APP, '/dashboard'),
        },
        notFound: path(ROOTS_APP, '/404')
    }
};
