import { publicRoutes } from "routes/routes";
import { useNavigate } from "react-router-dom";

export const useMain = () => {
    const navigate = useNavigate();

    function toLogin() {
        navigate(publicRoutes.LOGIN);
    }

    function toRegister() {
        navigate(publicRoutes.REGISTER);
    }
    return { toLogin, toRegister };
};