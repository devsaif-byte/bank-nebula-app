import "./App.css";

import Home from "./components/home/Home";
import { AuthProvider } from "./utils/AuthContext";

const App = () => {
	return (
		<AuthProvider>
			<Home />
		</AuthProvider>
	);
};

export default App;
