import { Query } from 'appwrite';
import { databases } from '$lib/appwrite';

const IDEAS_DATABASE_ID = 'joinshop_db';
const IDEAS_COLLECTION_ID = 'categories';

export async function getCategories() {
	return await databases.listDocuments(
		IDEAS_DATABASE_ID,
		IDEAS_COLLECTION_ID,
		// Use a query to show the latest ideas first
		[Query.orderAsc('name')]
	);
}