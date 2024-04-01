import * as React from "react";
import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import Home from "./components/home/Home.jsx";
import Login from "./components/auth/login/Login.jsx";
import Register from "./components/auth/register/Register.jsx";
import PrivateRoute from "./components/shared/PrivateRoute.jsx";
import { Main } from "./components/dashboard/Main.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "./components/shared/AuthDataContext.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/register",
		element: (
			<AuthProvider>
				<Register />
			</AuthProvider>
		),
	},
	{
		path: "/login",
		element: (
			<AuthProvider>
				<Login />
			</AuthProvider>
		),
	},
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/dashboard",
		element: (
			<AuthProvider>
				<PrivateRoute />
			</AuthProvider>
		),
		children: [
			{
				path: "",
				element: (
					<AuthProvider>
						<Main />
					</AuthProvider>
				),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<AuthProvider>
				<NextUIProvider>
					<main className="light text-foreground bg-background">
						<App />
					</main>
				</NextUIProvider>
			</AuthProvider>
		</RouterProvider>
	</React.StrictMode>
);
