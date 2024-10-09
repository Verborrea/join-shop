import { Query } from 'appwrite';
import { databases } from '$lib/appwrite';

const DATABASE_ID = 'joinshop_db';
const COLLECTION_ID = 'products';

const page_size = 12

export async function getProducts(page: string | null, category: string | null) {
	const queries = [
		Query.orderDesc('$createdAt'),
		Query.limit(page_size),
	];

	// Si hay categoría, agregar filtro
	if (category) {
		queries.push(Query.contains('categories_ids', category));
	}

	queries.push(Query.offset(page_size * parseInt(page || '0')))

	return await databases.listDocuments(
		DATABASE_ID,
		COLLECTION_ID,
		queries
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