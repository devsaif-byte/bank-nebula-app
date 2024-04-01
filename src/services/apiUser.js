import { Query } from "appwrite";
import { ID, databaseId, databases, usersCollectionId } from "../lib/appwrite";

/**
 * Creates a new user in the database with the provided credentials.
 * @param {Object} credentials - The credentials of the new user.
 * @returns {Promise<Object>} - A Promise that resolves with the created user document.
 */
export async function creteUser(credentials) {
	try {
		return await databases.createDocument(
			databaseId,
			usersCollectionId,
			ID.unique(),
			credentials
		);
	} catch (error) {
		console.log(error.message);
	}
}

/**
 * Retrieves user information from the database based on the provided email.
 * @param {string} email - The email of the user to retrieve.
 * @returns {Promise<Object>} - A Promise that resolves with the user document.
 */
export async function getUser(email) {
	try {
		const usersList = await databases.listDocuments(
			databaseId,
			usersCollectionId,
			[Query.equal("user_mail", email)]
		);
		const user = usersList.documents.find((el) => el.user_mail === email);
		return user;
	} catch (error) {
		console.log(error.message);
	}
}

/**
 * Updates the account balances and movements for the sender and recipient
 * users after transferring funds.
 * @param {string} recipientEmail - The email address of the recipient user.
 * @param {number} amount - The amount of money to be transferred.
 * @param {Object} authUser - The authenticated user performing the transfer.
 * @returns {Promise<void>} - A Promise that resolves once the transfer is complete.
 */
export async function updateTransfer(recipientEmail, amount, authUser) {
	try {
		console.log(authUser);
		console.log(typeof amount);

		// Validate receiver email, You Can't transfer money to yourself.
		if (recipientEmail === authUser.email)
			throw new Error("Transfer failed! Give another email.");

		if (amount <= 0) throw new Error("Give a valid amount!");
		// Get receiver information
		const get_receiver = await getUser(recipientEmail);
		const calc_receiver_balance =
			Number(get_receiver?.account_balance) + Number(amount);
		const receiver_docId = get_receiver?.$id;

		// Update receiver's document
		const receiver = await databases.updateDocument(
			databaseId,
			usersCollectionId,
			receiver_docId,
			{
				account_balance: calc_receiver_balance,
				movements: [...(get_receiver?.movements || []), `+$${amount}`],
			}
		);

		// Get sender information
		const get_sender = await getUser(authUser.email);
		const calc_sender_balance =
			Number(get_sender.account_balance) - Number(amount);
		const sender_docId = get_sender.$id;

		// Update sender's document
		const sender = await databases.updateDocument(
			databaseId,
			usersCollectionId,
			sender_docId,
			{
				account_balance: calc_sender_balance,
				movements: [...(get_sender?.movements || []), `-$${amount}`],
			}
		);

		// Log the updated user documents
		console.log("Updated receiver:", receiver);
		console.log("Updated sender:", sender);
		return true;
	} catch (error) {
		console.log(error.message);
		return false;
	}
}

/**
 * Grants a loan to the specified recipient by updating their account balance and movements.
 *
 * @async
 * @param {string} recipientEmail - The email address of the recipient who will receive the loan.
 * @param {number} amount - The amount of the loan to be granted.
 * @throws {Error} Throws an error if the loan amount exceeds the maximum limit of $50,000.
 * @returns {Promise<void>} A Promise that resolves once the loan is successfully granted.
 * @example
 * try {
 *     await getLoan('recipient@example.com', 25000);
 *     console.log('Loan granted successfully!');
 * } catch (error) {
 *     console.error('Error granting loan:', error);
 * }
 */
export async function getLoan(recipientEmail, amount) {
	try {
		console.log(recipientEmail, amount);
		if (amount <= 0) throw new Error("Give a valid amount!");
		// Get receiver information
		const get_receiver = await getUser(recipientEmail);
		const calc_receiver_balance =
			Number(get_receiver?.account_balance) + Number(amount);
		const receiver_docId = get_receiver?.$id;

		// Check if amount exceeds the maximum loan amount
		const MAX_LOAN_AMOUNT = 50000;
		if (amount > MAX_LOAN_AMOUNT) {
			throw new Error("Loan amount exceeds the maximum limit of $50,000");
		}
		// Update receiver's document
		const result = await databases.updateDocument(
			databaseId,
			usersCollectionId,
			receiver_docId,
			{
				account_balance: calc_receiver_balance,
				movements: [...(get_receiver?.movements || []), `-$${String(amount)}`],
			}
		);
		console.log(result);
		return true;
	} catch (error) {
		console.log(error.message);
		return false;
	}
}
