import { Client, Account, Databases } from "appwrite";

export const client = new Client();

client
	.setEndpoint("https://cloud.appwrite.io/v1")
	.setProject("65f2dbc05b765957a694"); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);

export var databaseId = "660441e651247efb0827";
export var usersCollectionId = "6604420ea0f1c0c85f55";
export var transactionsCollectionId = "66045d205c1b81ce3e1d";
export var loanRequestCollectionId = "66045fe6e73756c70941";

export { ID } from "appwrite";
