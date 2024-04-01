import { getUser } from "../services/apiUser";

// export const formatMovementDate = function (date) {
// 	const millisecondsPerDay = 24 * 60 * 60 * 1000;
// 	const today = new Date();
// 	const dayPassed = Math.round(Math.abs(today - date) / millisecondsPerDay);

// 	if (dayPassed === 0) return "Today";
// 	if (dayPassed === 1) return "Yesterday";
// 	if (dayPassed <= 7) return `${dayPassed} days ago`;

// 	const day = String(date.getDate()).padStart(2, "0");
// 	const month = String(date.getMonth() + 1).padStart(2, "0");
// 	const year = date.getFullYear();
// 	return `${day}-${month}-${year}`;
// };
export const formatMovementDate = function (dateString) {
	const date = new Date(dateString); // Parse the date string into a Date object
	const millisecondsPerDay = 24 * 60 * 60 * 1000;
	const today = new Date();
	const dayPassed = Math.round(Math.abs(today - date) / millisecondsPerDay);

	if (dayPassed === 0) return "Today";
	if (dayPassed === 1) return "Yesterday";
	if (dayPassed <= 7) return `${dayPassed} days ago`;

	// If none of the above conditions are met, return the formatted date
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();
	return `${day}-${month}-${year}`;
};
export const formatCurrency = (amount) => {
	if (amount >= 1000000000) {
		const billionAmount = amount / 1000000000;
		return `${billionAmount?.toFixed(2)}B`;
	} else if (amount >= 1000000) {
		const millionAmount = amount / 1000000;
		return `${millionAmount?.toFixed(2)}M`;
	} else {
		return amount?.toFixed(2);
	}
};

// Example usage:
const someDate = new Date("2024-03-25");
console.log(formatMovementDate(someDate)); // Output: "2 days ago"
