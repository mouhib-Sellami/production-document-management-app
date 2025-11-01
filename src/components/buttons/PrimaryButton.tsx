import React from "react";
import { Button, px } from "@mantine/core";
import type { AppButtonProps } from "./type";

const PrimaryButton: React.FC<AppButtonProps> = (props) => {
    const { children, ...item } = props;
    return (
        <Button
            h={px("2.5rem")}
            style={{
                fontSize: 16,
                fontWeight: "500",
            }}
            {...item}
        >{children}</Button>
    )
}

export default PrimaryButton;