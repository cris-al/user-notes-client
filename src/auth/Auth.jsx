import { publicRoutes } from "routes/routes";
import { Navigate, Outlet } from "react-router-dom";
import { getLocalStorageItem } from "utilities/localStorage/index";

export default function Auth(){
    const token = getLocalStorageItem("token");

    return token ? <Outlet /> : <Navigate replace to={publicRoutes.MAIN} />
};