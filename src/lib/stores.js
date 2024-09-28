import { writable } from 'svelte/store';


/**
 * @typedef {Object} Cart
 * @property {CartItem[]} items - Los artículos en el carrito.
 * @property {number} subtotal - El subtotal del carrito.
 * @property {number} quantity - La cantidad total de productos en el carrito.
 * @returns {Cart} Estado inicial del carrito
 */

/** 
 * @typedef {Object} CartItem
 * @property {string} id - El ID del producto.
 * @property {number} price - El precio del producto.
 * @property {number} quantity - La cantidad del producto en el carrito.
 */

/** 
 * @returns {Cart} Estado inicial del carrito
 */
const getInitialCartState = () => ({
	items: [],
	subtotal: 0,
	quantity: 0,
});

function createCart() {

	const { subscribe, set, update } = writable(getInitialCartState());

	return {
		subscribe,
		set,

		/**
		 * Añadir un producto al carrito
		 * @param {string} id - ID del producto a añadir
		 * @param {number} price - Precio del producto a añadir
		 */
		addItem: (id, price) =>
			update((state) => {
				const index = state.items.findIndex(item => item.id === id);

				if (index !== -1) {
					// Actualizar cantidad y subtotal si el producto ya existe
					state.items[index].quantity += 1;
				} else {
					// Añadir nuevo producto al carrito
					state.items.push({ id, price, quantity: 1 });
				}

				state.subtotal += price;
				state.quantity += 1;

				return state;
		}),

		/**
		 * @param {string} id - ID del producto a eliminar
		 */
		removeItem: (id) =>
			update((state) => {
				const index = state.items.findIndex(item => item.id === id);

				if (index !== -1) {
					// Si la cantidad del producto es mayor a 1, disminuir la cantidad y actualizar el subtotal
					if (state.items[index].quantity > 1) {
						state.items[index].quantity -= 1;
						state.subtotal -= state.items[index].price; // Restar el precio solo una vez
						state.quantity -= 1; // Restar uno de la cantidad total
					} else {
						// Si la cantidad es 1, eliminar el producto del carrito
						state.subtotal -= state.items[index].price; // Restar el precio antes de eliminar
						state.quantity -= 1; // Restar uno de la cantidad total
						state.items.splice(index, 1);
					}
				}

				return state;
			}),


		/**
		 * Vaciar el carrito
		 */
		clearCart: () => set(getInitialCartState())
	};
}

// export const container = writable(0)

// Uso del carrito
export const cart = createCart();