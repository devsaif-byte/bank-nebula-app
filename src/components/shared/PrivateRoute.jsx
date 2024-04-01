import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
export default function PrivateRoute() {
	// const { user } = useAuth();
	const user = true;
	return user ? <Outlet /> : <Navigate to="/login" />;
}
