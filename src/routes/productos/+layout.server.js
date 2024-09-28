import { categories, products as allProducts } from './data.js'

export async function load({ url }) {
	const category = url.searchParams.get('category')

	let filteredProducts = allProducts;

	if (category) {
		filteredProducts = allProducts.filter(product =>
			product.categories.some(cat => cat.id === category)
		);
	}

	return { categories, products: filteredProducts, allProducts }
}