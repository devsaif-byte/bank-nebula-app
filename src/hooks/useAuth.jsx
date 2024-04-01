import { useContext } from "react";
import AuthDataContext from "../components/shared/AuthDataContext";

const useAuthData = () => {
	const context = useContext(AuthDataContext);
	if (!context)
		throw new Error("useAuthData must be used within an AuthProvider");
	return context;
};

export default useAuthData;
