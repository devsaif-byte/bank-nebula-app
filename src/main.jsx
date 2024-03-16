import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/auth/login/Login.jsx";
import Register from "./components/auth/register/Register.jsx";
import Home from "./components/home/Home.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { Main } from "./components/dashboard/Main.jsx";
import PrivateRoute from "./utils/PrivateRoute.jsx";
import AuthProvider from "./utils/AuthContext.jsx";

const router = createBrowserRouter([
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/dashboard",
		element: <PrivateRoute />,
		children: [{ path: "", element: <Main /> }],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<NextUIProvider>
			<RouterProvider router={router}>
				<AuthProvider>
					<main className="light text-foreground bg-background">
						<App />
					</main>
				</AuthProvider>
			</RouterProvider>
		</NextUIProvider>
	</React.StrictMode>
);
