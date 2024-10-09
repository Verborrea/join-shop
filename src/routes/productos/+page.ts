import { getCategories } from "$lib/categories.js"
import { getProducts } from "$lib/products"

export async function load({ url }) {

	const page = url.searchParams.get('page')
	const category = url.searchParams.get('category')

	return {
		categories_promise: getCategories(),
		products_promise: getProducts(page, category)
	}
}