import { getSomeProducts, getProduct } from "$lib/products"
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const product = await getProduct(params.id)
	const products = await getSomeProducts(params.id, 2)

	if (!product) error(404);
	
	return {
		product,
		products
	};
}