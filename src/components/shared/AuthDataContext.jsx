import { createContext, useState, useEffect } from "react";
import { ID, account } from "../../lib/appwrite";
import { useNavigate } from "react-router-dom";
import Loader from "../ui/loader";
import { getUser } from "../../services/apiUser";

export const AuthDataContext = createContext();
export function AuthProvider({ children }) {
	const [user, setUser] = useState("");
	const [loading, setLoading] = useState(true);
	const [databaseUser, setDatabaseUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const checkUserExistence = async () => {
			try {
				// Auth account
				const user = await account.get();
				setUser(user);
				// Database account
				const db_user = await getUser(user?.email);
				setDatabaseUser(db_user);
			} catch (err) {
				console.log(err);
			} finally {
				setLoading(false);
			}
		};
		checkUserExistence();
	}, []);

	const loginUser = async (userInfo) => {
		try {
			const promise = await account.createEmailSession(
				userInfo.email,
				userInfo.password
			);
			console.log(promise);
			const auth_user = await account.get();
			setUser(auth_user);
			if (
				auth_user.email === userInfo.email ||
				auth_user.password === userInfo.password
			) {
				navigate("/dashboard");
			} else alert("User not exist! please signUp an account.");
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	const logoutUser = async () => {
		try {
			await account.deleteSession("current");
			setUser(null);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	const registerUser = async (userInfo) => {
		try {
			await account.create(ID.unique(), userInfo.email, userInfo.password);
			await account.createEmailSession(userInfo.email, userInfo.password);
			const auth_user = await account.get();
			setUser(auth_user);
			navigate("/login");
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	const values = {
		user,
		loading,
		setLoading,
		loginUser,
		logoutUser,
		registerUser,
		databaseUser,
		setDatabaseUser,
	};
	return (
		<AuthDataContext.Provider value={values}>
			{loading ? <Loader /> : children}
		</AuthDataContext.Provider>
	);
}

export default AuthDataContext;
