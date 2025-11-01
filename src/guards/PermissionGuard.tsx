import React from 'react';
import PropTypes from 'prop-types';
import useCheckPermission from '@/hooks/useCheckPermission';

interface PermissionGuardProps extends React.PropsWithChildren {
    permission: string,
}

PermissionGuard.propTypes = {
    children: PropTypes.node
};

export default function PermissionGuard(props: PermissionGuardProps) {
    const { hasPermission } = useCheckPermission();

    if (hasPermission(props.permission)) {
        return props.children
    } else {
        return null
    }
}
