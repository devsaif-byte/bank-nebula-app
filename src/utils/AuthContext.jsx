import { Spinner } from "@nextui-org/react";
import { createContext, useState, useEffect, useContext } from "react";
import { ID, account } from "../lib/appwrite";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);

	const navigate = useNavigate();

	useEffect(() => checkUserStatus(), []);

	const loginUser = async (userInfo) => {
		setLoading(true);
		try {
			const promise = await account.createEmailSession(
				userInfo.email,
				userInfo.password
			);
			console.log(promise);
			setUser(await account.get());
		} catch (err) {
			console.log(err);
		}
		setLoading(false);
	};

	const logoutUser = async () => {
		try {
			await account.deleteSession("current");
			setUser(null);
		} catch (err) {
			console.log(err);
		}
		setLoading(false);
	};

	const registerUser = async (userInfo) => {
		setLoading(true);
		try {
			await account.create(ID.unique(), userInfo.email, userInfo.password);
			await account.createEmailSession(userInfo.email, userInfo.password);
			setUser(await account.get());
			navigate("/");
		} catch (err) {
			console.log(err);
		}
		setLoading(false);
	};

	const checkUserStatus = async () => {
		setLoading(true);
		try {
			const user = await account.get();
			setUser(user);
		} catch (err) {
			console.log(err);
		}
		setLoading(false);
	};

	const values = {
		user,
		loginUser,
		logoutUser,
		registerUser,
	};

	console.log(values);
	return (
		<AuthContext.Provider value={values}>
			{loading ? <Spinner label="Loading..." color="warning" /> : children}
		</AuthContext.Provider>
	);
}

export default AuthContext;
