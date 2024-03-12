import { BackgroundBeams } from "../ui/background-beams";
import LoanCard from "../dashboard/LoanCard";
import DisplayCard from "../dashboard/DisplayCard";
import TransferCard from "../dashboard/TransferCard";
import MovementCard from "../dashboard/MovementsCard";

import { SparklesCore } from "../ui/sparkles";
import DashNav from "./DashNav";
export function Main() {
	return (
		// <div className="h-svh w-full bg-gray-900 flex flex-col items-center justify-center overflow-hidden rounded-md">
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

			<div className="max-w-screen-xl mx-auto grid md:grid-cols-2 grid-rows-2 gap-8 mt-16">
				<DisplayCard className="col-span-2 row-span-2" />
				<TransferCard className="row-start-3 col-start-1 col-span-2" />
				<LoanCard className="row-start-3 col-start-1 col-span-2" />
				<MovementCard className="row-start-2 row-end-4 col-start-2" />
			</div>
		</div>
		// </div>
	);
}
