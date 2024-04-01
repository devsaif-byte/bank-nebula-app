import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { updateTransfer } from "../../services/apiUser";
import { toast } from "react-toastify";

export default function TransferCard() {
	const { user } = useAuth();
	const [receiverMail, setReceiverMail] = useState("");
	const [transferAmount, setTransferAmount] = useState();

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			const result = await updateTransfer(receiverMail, transferAmount, user);
			if (result)
				toast.success("Transaction successful. refresh to see the changes");
			else if (!result) toast.error("Transaction failed.");
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Card className=" bg-neutral-200 backdrop-blur-xl p-8 bg-transparent text-neutral-100 border-2">
			<CardHeader className="pb-0 flex-col items-start">
				<p className="uppercase font-bold text-xl mb-5 tracking-widest">
					Transfer Credit
				</p>
			</CardHeader>
			<CardBody className="flex flex-col gap-3">
				<Input
					type="text"
					size="sm"
					variant="bordered"
					label="Receiver Mail"
					radius="none"
					value={receiverMail}
					onChange={(e) => setReceiverMail(e.target.value)}
				/>
				<Input
					type="number"
					size="sm"
					variant="bordered"
					label="Amount"
					radius="none"
					value={transferAmount}
					onChange={(e) => setTransferAmount(e.target.value)}
				/>

				<Button onClick={handleSubmit} className="w-20" color="warning">
					Transfer
				</Button>
			</CardBody>
		</Card>
	);
}
