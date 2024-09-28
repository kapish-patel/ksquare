import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ element: Component, redirect}) {    
    const isAuth = true;
    return isAuth ? <Component /> : <Navigate to={redirect} />;
}

export default PrivateRoute;
