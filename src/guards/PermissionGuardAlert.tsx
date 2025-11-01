import React from 'react';
import PropTypes from 'prop-types';
import useCheckPermission from '@/hooks/useCheckPermission';
import { Alert, Box } from '@mantine/core';
import { IconShieldCancel } from '@tabler/icons-react';

interface PermissionGuardAlertProps extends React.PropsWithChildren {
    permission: string,
}


PermissionGuardAlert.propTypes = {
    children: PropTypes.node
};

export default function PermissionGuardAlert(props: PermissionGuardAlertProps) {
    const { hasPermission } = useCheckPermission();

    if (hasPermission(props.permission)) {
        return props.children
    } else {
        return <Box w={"100%"} h={"100%"}>
            <Alert variant="light" color="red" title="Access restricted" icon={<IconShieldCancel />} h={"100%"} radius={0}  >
                You don't currently have permission to access this content
            </Alert>
        </Box>
    }
}
