import { products } from '../data.js'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	const product = products.find((p) => p.id === params.id);

	if (!product) error(404);

	const seleccionados = new Set();

	while (seleccionados.size < 3) {
			const indiceAleatorio = Math.floor(Math.random() * products.length);
			seleccionados.add(products[indiceAleatorio]);
	}
	
	return {
		product, products: Array.from(seleccionados)
	};
}