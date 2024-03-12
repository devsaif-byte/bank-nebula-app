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
		element: <Main />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<NextUIProvider>
				<main className="light text-foreground bg-background">
					<App />
				</main>
			</NextUIProvider>
		</RouterProvider>
	</React.StrictMode>
);
