import { useSelector, type RootState } from "../redux/store";


const useAuth = () => {
    const useAuth = useSelector(
        (state: RootState) => state.auth
    )
    return useAuth;
};
export default useAuth;
