import LoanCard from "../dashboard/LoanCard";
import DisplayCard from "../dashboard/DisplayCard";
import TransferCard from "../dashboard/TransferCard";
import MovementCard from "../dashboard/MovementsCard";
import { SparklesCore } from "../ui/sparkles";
import DashNav from "./DashNav";
import useAuth from "../../hooks/useAuth";
import { ModalProvider } from "../shared/ModalContex";
import { Flip, ToastContainer } from "react-toastify";

export function Main() {
	const { user, databaseUser } = useAuth();
	console.log(user, databaseUser);

	return (
		<div>
			<DashNav />
			<div className="w-full absolute inset-0 h-screen bg-gray-900 ">
				<SparklesCore
					id="tsparticlesfullpage"
					background="transparent"
					minSize={0.6}
					maxSize={1.4}
					particleDensity={100}
					className="w-full h-full"
					particleColor="#FFFFFF"
				/>
			</div>

			<ModalProvider>
				<div className="max-w-screen-xl mx-auto grid md:grid-cols-2 grid-rows-2 gap-8 mt-16">
					<DisplayCard className="col-span-2 row-span-2" />
					<TransferCard className="row-start-3 col-start-1 col-span-2" />
					<LoanCard className="row-start-3 col-start-1 col-span-2" />
					<MovementCard className="row-start-2 row-end-4 col-start-2" />
					<ToastContainer
						position="top-center"
						autoClose={1200}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="dark"
						transition={Flip}
						limit={3}
					/>
				</div>
			</ModalProvider>
		</div>
	);
}
