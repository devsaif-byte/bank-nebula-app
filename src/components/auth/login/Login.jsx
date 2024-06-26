import { Button, Input } from "@nextui-org/react";
import { Logo } from "../../common/Logo";
import { Meteors } from "../../ui/meteors";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { account } from "../../../lib/appwrite";
import { toast } from "react-toastify";

export default function Login() {
	const [user, setUser] = useState(null);
	return (
		<div className="flex items-center justify-center h-screen w-screen">
			<div className=" w-full relative h-screen">
				<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
				<div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-sm flex flex-col justify-center items-center">
					<div className="h-14 w-14 rounded-full border flex items-center justify-center mb-4 border-gray-500">
						<Logo />
					</div>
					<p>{user ? `Logged in as ${user.name}` : "Not logged in"}</p>

					<h1 className="font-bold text-xl mb-4 relative z-50 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
						Unlock the Vault : Your Cosmic Cash Awaits!
					</h1>

					<p className="font-normal text-base text-slate-500 mb-4 relative z-50 max-w-[500px]">
						Navigate your cosmic cash with Bank&apos;s top-tier security. your
						financial spaceship hassle-free—no alien antics allowed!!
					</p>

					<LoginForm user={user} setUser={setUser} />
					{/* Meaty part - Meteor effect */}
					<Meteors number={20} />
				</div>
			</div>
		</div>
	);
}

function LoginForm({ user, setUser }) {
	// const { user, loginUser } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(true);

	const userInfo = { email, password };
	const navigate = useNavigate();
	const loginUser = async (userInfo) => {
		setLoading(true);
		try {
			// logout the session before creating new session
			const promise = await account.createEmailSession(
				userInfo.email,
				userInfo.password
			);
			console.log(promise);
			const auth_user = await account.get();

			setUser(auth_user);
			if (auth_user.email === email || auth_user.password === password) {
				navigate("/dashboard");
				toast.success("Login Successful!");
			} else alert("User not exist! please signUp an account.");
		} catch (err) {
			console.log(err);
			toast.error(err);
		}
		setLoading(false);
	};
	return (
		<form className="flex flex-col w-full md:max-w-[500px] flex-wrap md:flex-nowrap font-normal text-base text-slate-500 gap-4 mb-4 relative z-50">
			<Input
				radius="none"
				type="email"
				value={email}
				label="Email"
				variant="bordered"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<Input
				radius="none"
				type="password"
				value={password}
				label="Password"
				variant="bordered"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<p className="pb-6">
				Not have account?
				<Link to="/register"> Register here</Link>
			</p>
			<Button
				onClick={() => loginUser(userInfo)}
				color="secondary"
				showAnchorIcon
				radius="none"
				type="button"
			>
				Login
			</Button>
		</form>
	);
}
