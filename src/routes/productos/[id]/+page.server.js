import { products } from '../data.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const product = products.find((p) => p.id === params.id);

	if (!product) error(404);

	const seleccionados = new Set();

	while (seleccionados.size < 3) {
		const indiceAleatorio = Math.floor(Math.random() * products.length);
		const productoAleatorio = products[indiceAleatorio];

		// Asegurarse de que el producto aleatorio no sea el seleccionado
		if (productoAleatorio.id !== product.id) {
			seleccionados.add(productoAleatorio);
		}
	}
	
	return {
		product,
		products: Array.from(seleccionados) // Convertir el Set a un Array
	};
}