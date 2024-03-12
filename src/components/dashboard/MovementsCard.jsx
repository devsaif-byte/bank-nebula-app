import React from "react";
import { Card, CardBody, Chip } from "@nextui-org/react";

export default function MovementsCard() {
	const items = Array.from({ length: 20 }, (_, index) => index + 1);
	return (
		<Card className="bg-neutral-200 backdrop-blur-xl p-8 bg-transparent text-neutral-100  border-2">
			<CardBody className="overflow-y-auto max-h-unit-60">
				{items.map((item) => (
					<div
						key={item}
						className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 w-full p-3 flex flex-wrap justify-between bg-neutral-50 bg-opacity-5 border-b border-opacity-5"
					>
						<Chip color="success" variant="shadow">
							{`${item} deposit`}
						</Chip>
						<div>{`${item} days ago`}</div>
						<div>${item * 100}</div>
					</div>
				))}
			</CardBody>
		</Card>
	);
}
