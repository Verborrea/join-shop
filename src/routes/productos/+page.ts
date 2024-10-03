import { getCategories } from "$lib/categories.js"
import { getProducts } from "$lib/products"

export async function load({ url }) {
	return {
		category: url.searchParams.get('category'),
		categories_promise: getCategories(),
		products_promise: getProducts()
	}
}