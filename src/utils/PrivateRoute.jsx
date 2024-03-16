import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./UseAuth";
import { account } from "../lib/appwrite";
export default function PrivateRoute() {
	// const { user } = useAuth();
	const user = account.get();
	console.log(user);
	return user ? <Outlet /> : <Navigate to="/login" />;
}
