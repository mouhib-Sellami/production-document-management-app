import React from "react";
import useAuth from "./useAuth";


const useCheckPermission = () => {
    const { permissions } = useAuth();

    const hasPermission = React.useCallback((permission: string) => {
        if (permission.toUpperCase().includes("PUBLIC"))
            return true
        return permissions?.findIndex(elm => elm.label.toUpperCase() == permission.toUpperCase()) != -1
    }, [permissions])

    return {
        hasPermission
    }
}

export default useCheckPermission;