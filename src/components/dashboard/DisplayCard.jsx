import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { formatCurrency } from "../../utils/helper";
import useAuthData from "../../hooks/useAuth";

export default function DisplayCard() {
	const { databaseUser } = useAuthData();
	const accountBalance = databaseUser?.account_balance;
	const date = new Date();
	const formattedDate = date.toLocaleDateString("en-US", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	return (
		<Card className=" bg-neutral-200 backdrop-blur-xl p-8 bg-transparent text-neutral-100 border-2">
			<CardHeader className="pb-0 flex-col items-start">
				<p className="uppercase font-bold text-xl tracking-widest">
					Current Balance
				</p>
				<small className="text-xl text-[#f5a524]">As of {formattedDate}</small>
			</CardHeader>
			<CardBody className="items-start">
				<h4 className="font-bold text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
					{accountBalance && "$" + formatCurrency(accountBalance)}
					{/* $56,823.00 */}
				</h4>
			</CardBody>
		</Card>
	);
}
