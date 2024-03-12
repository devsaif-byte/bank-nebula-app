import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function DisplayCard() {
	return (
		<Card className="bg-neutral-200 backdrop-blur-xl p-8 bg-transparent text-neutral-100 border-2">
			<CardHeader className="pb-0 flex-col items-start">
				<p className="uppercase font-bold text-xl">Current Balance</p>
				<small className="text-default-400 text-xl">As of 21,06,2024</small>
			</CardHeader>
			<CardBody className="items-start">
				<h4 className="font-bold text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
					$56,823.00
				</h4>
			</CardBody>
		</Card>
	);
}
