import { LoadingOverlay } from "@mantine/core";

const CustomLoadingOverlay: React.FC = ({ }) => {
    return (
        <LoadingOverlay
            visible
            zIndex={1000}
            overlayProps={{ radius: "sm", blur: 1, backgroundOpacity: 0.2 }}
        />
    )
}

export default CustomLoadingOverlay;