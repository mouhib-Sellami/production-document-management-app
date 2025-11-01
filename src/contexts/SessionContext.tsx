import { dispatch, useSelector, type RootState } from '@/redux/store';
import useAuth from '@/hooks/useAuth';
import { login, logout, retrieve, signup } from '@/redux/slices/authSlices/authSliceThunk';
import type { User } from '@/types/models/User';
import React from 'react';

type SessionContextProps = {
    signIn: (data: UserAuth) => Promise<any> | null;
    register: (data: FormData) => Promise<any> | null;
    signOut: () => Promise<void> | null;
    retrieveUser: () => Promise<any> | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    user: User | null;
};

type SessionProviderProps = {
    children?: React.ReactNode;
};

const SessionContext = React.createContext<Partial<SessionContextProps>>({
    isAuthenticated: false,
    isLoading: false,
    signIn: (_: UserAuth) => null,
    register: (_: FormData) => null,
    signOut: () => null,
    retrieveUser: () => null,
});

const SessionProvider = ({ children }: SessionProviderProps) => {
    const { isLoading, user, isAuthenticated } = useAuth();
    const { isAlive } = useSelector((state: RootState) => state.session);


    const signIn = React.useCallback(async (data: UserAuth) => {
        const res = await dispatch(login(data));
        return res;
    }, []);

    const register = React.useCallback(async (data: FormData) => {
        const res = await dispatch(signup(data));
        return res;
    }, []);

    const signOut = React.useCallback(async () => {
        await dispatch(logout());
    }, []);

    const retrieveUser = React.useCallback(async () => {
        const res = await dispatch(retrieve());
        return res
    }, []);

    React.useEffect(() => {
        if (isAlive) {
            retrieveUser();
        }
    }, [isAlive,]);

    return (
        <SessionContext.Provider
            value={{
                isLoading,
                user,
                isAuthenticated,
                retrieveUser,
                signOut,
                signIn,
                register
            }}
        >
            {children}
        </SessionContext.Provider>
    );
};

export const useSession = () => {
    const context = React.useContext(SessionContext);
    if (import.meta.env.DEV) {
        if (!context) {
            throw new Error('useSession must be wrapped in a <SessionProvider />');
        }
    }
    return context;
};

export { SessionProvider, SessionContext };