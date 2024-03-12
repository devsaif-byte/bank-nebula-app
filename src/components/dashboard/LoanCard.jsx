import { Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import React from "react";

export default function LoanCard() {
	return (
		<Card className="bg-neutral-200 backdrop-blur-xl p-8 bg-transparent text-neutral-100 border-2">
			<CardHeader className="pb-0 flex-col items-start">
				<p className="uppercase font-bold text-xl mb-5">Request Loan</p>
			</CardHeader>
			<CardBody>
				<Input
					type="text"
					size="sm"
					variant="bordered"
					label="Amount"
					radius="none"
				/>
			</CardBody>
		</Card>
	);
}
