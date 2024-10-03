import { Query } from 'appwrite';
import { databases } from '$lib/appwrite';

const DATABASE_ID = 'joinshop_db';
const COLLECTION_ID = 'products';

export async function getProducts() {
	return await databases.listDocuments(
		DATABASE_ID,
		COLLECTION_ID,
		[Query.orderDesc('$createdAt')]
	);
}

export async function getSomeProducts(id:string, q: number) {
	return await databases.listDocuments(
		DATABASE_ID,
		COLLECTION_ID,
		[Query.orderDesc('$createdAt'), Query.notEqual("$id", [id]), Query.limit(q)]
	);
}

export async function getProduct(id: string) {
	return await databases.getDocument(
		DATABASE_ID,
		COLLECTION_ID,
		id
	);
}