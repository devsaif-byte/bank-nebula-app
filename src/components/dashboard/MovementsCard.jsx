import { Card, CardBody, Chip } from "@nextui-org/react";
import { formatMovementDate } from "../../utils/helper";
import useAuthData from "../../hooks/useAuth";

export default function MovementsCard() {
	const { databaseUser } = useAuthData();
	// Generating an array of 20 items with positive and negative values
	// const items = Array.from(
	// 	{ length: 20 },
	// 	(_, index) => (index + 1) * (Math.random() < 0.5 ? -1 : 1)
	// );

	return (
		<Card className=" bg-neutral-200 backdrop-blur-xl p-8 bg-transparent text-neutral-100 border-2">
			<CardBody className="overflow-y-auto max-h-unit-60">
				{databaseUser.movements && databaseUser.movements.length > 0 ? (
					databaseUser?.movements.map((item) => (
						<div
							key={item}
							className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 w-full p-3 flex flex-wrap justify-between bg-neutral-50 bg-opacity-5 border-b border-opacity-5"
						>
							<Chip
								color={Number(item) > 0 ? "success" : "danger"}
								variant="shadow"
							>
								{item > 0 ? "deposit" : "withdrawal"}
							</Chip>
							<div>{formatMovementDate(databaseUser?.$updatedAt)}</div>
							<div>{item}</div>
						</div>
					))
				) : (
					<p className="text-white text-center items-center">
						No transaction found.
					</p>
				)}
			</CardBody>
		</Card>
	);
}
