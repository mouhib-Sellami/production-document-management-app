import { ButtonProps, ElementProps } from "@mantine/core";

interface AppButtonProps
    extends ButtonProps,
    ElementProps<'button', keyof ButtonProps> {

}