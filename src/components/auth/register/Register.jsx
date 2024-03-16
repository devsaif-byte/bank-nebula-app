import { Button, Input } from "@nextui-org/react";
import { Logo } from "../../common/Logo";
import { Meteors } from "../../ui/meteors";
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { useAuth } from "../../../utils/UseAuth";
import { ID, account } from "../../../lib/appwrite";

export default function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);
	// const { user, registerUser } = useAuth();
	const userInfo = { email, password };
	const navigate = useNavigate();
	const registerUser = async (userInfo) => {
		setLoading(true);
		try {
			await account.create(ID.unique(), userInfo.email, userInfo.password);
			await account.createEmailSession(userInfo.email, userInfo.password);
			setUser(await account.get());
			navigate("/login");
		} catch (err) {
			console.log(err);
		}
		setLoading(false);
	};

	return (
		<div className="flex items-center justify-center h-screen w-screen">
			<div className=" w-full relative h-screen">
				<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
				<div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-sm flex flex-col justify-center items-center">
					<div className="h-14 w-14 rounded-full border flex items-center justify-center mb-4 border-gray-500">
						<Logo />
					</div>

					<h1 className="font-bold text-xl mb-4 relative z-50 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
						Join the Cosmos finance : Register Now!
					</h1>

					<p className="font-normal text-base text-slate-500 mb-4 relative z-50 max-w-[500px]">
						Register today to join our cosmic community. Set up your account and
						get ready to explore the universe of banking. Your stellar adventure
						begins with just a few clicks!
					</p>
					<form className="flex flex-col min-w-[500px] flex-wrap md:flex-nowrap font-normal text-base text-slate-500 gap-4 mb-4 relative z-50">
						<Input
							radius="none"
							type="email"
							value={email}
							label="Email"
							variant="bordered"
							onChange={useCallback((e) => setEmail(e.target.value), [])}
						/>
						<Input
							radius="none"
							type="password"
							value={password}
							label="Password"
							variant="bordered"
							onChange={useCallback((e) => setPassword(e.target.value), [])}
						/>
						<p className="pb-6">
							Already joined?
							<Link to="/login"> Login here</Link>
						</p>
						<Button
							onClick={async () => {
								registerUser(userInfo);
							}}
							type="button"
							color="secondary"
							showAnchorIcon
							radius="none"
						>
							Register your account
						</Button>
					</form>

					{/* Meaty part - Meteor effect */}
					<Meteors number={20} />
				</div>
			</div>
		</div>
	);
}
