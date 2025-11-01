import React, { Suspense } from "react";
import CustomLoadingOverlay from "@/components/custom-loading/CustomLoadingOverlay";

const Loadable = (Component: React.FC) => (props: typeof Component.propTypes) => {

    return (
        <Suspense fallback={<CustomLoadingOverlay />}>
            <Component {...props} />
        </Suspense>
    );
};

export default Loadable;