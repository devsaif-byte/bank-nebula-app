import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { useState } from "react";
import { getLoan } from "../../services/apiUser";
import useAuthData from "../../hooks/useAuth";
import { toast } from "react-toastify";

export default function LoanCard() {
	const { user } = useAuthData();
	const [loanAmount, setLoanAmount] = useState(0);

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			const result = await getLoan(user.email, loanAmount);
			if (result)
				toast.success(
					"Congratulations, loan approved! refresh to see the changes."
				);
			else if (!result) toast.error("Sorry for this time! try again.");
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<Card className=" bg-neutral-200 backdrop-blur-xl p-8 bg-transparent text-neutral-100 border-2">
			<CardHeader className="pb-0 flex-col items-start">
				<p className="uppercase font-bold text-xl mb-5 tracking-widest">
					Get a Loan
				</p>
			</CardHeader>
			<CardBody className="flex flex-col gap-3">
				<Input
					type="number"
					size="sm"
					variant="bordered"
					label="Amount"
					radius="none"
					onChange={(e) => setLoanAmount(e.target.value)}
				/>
				<Button onClick={handleSubmit} className="w-20" color="warning">
					Confirm
				</Button>
			</CardBody>
		</Card>
	);
}
