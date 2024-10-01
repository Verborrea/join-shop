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
 * @property {string} name - El nombre del producto.
 * @property {number} price - El precio del producto.
 * @property {number} quantity - La cantidad del producto en el carrito.
 */

/**
 * @typedef {Object} Datos
 * @property {number} envio
 * @property {number[]} coords
 * @property {string} day
 * @property {string} name
 * @property {string} phone
 * @property {string} email
 * @property {string} notes
 * @property {string} address
 * @property {boolean} valid_location
 * @returns {Cart} Estado inicial de los datos
 */

/** 
 * @returns {Cart} Estado inicial del carrito
 */
const getInitialCartState = () => {
	if (typeof localStorage !== 'undefined') {
		const storedState = localStorage.getItem('cart');
		return storedState ? JSON.parse(storedState) : {
			items: [],
			subtotal: 0,
			quantity: 0,
		};
	}
	return {
		items: [],
		subtotal: 0,
		quantity: 0,
	}
};

/** 
 * @returns {Datos} Estado inicial del carrito
 */
const getInitialDatosState = () => {
	if (typeof localStorage !== 'undefined') {
		const storedState = localStorage.getItem('datos');
		return storedState ? JSON.parse(storedState) : {
			envio: 0,
			coords: [],
			day: '',
			valid_location: false,
			name: '',
			phone: '',
			email: '',
			notes: '',
			address: '',
		};
	}
	return {
		envio: 0,
		coords: [],
		day: '',
		valid_location: false,
		name: '',
		phone: '',
		email: '',
		notes: '',
		address: '',
	}
}

function createCart() {

	const { subscribe, set, update } = writable(getInitialCartState());

	if (typeof localStorage !== 'undefined') {
		subscribe((state) => {
			localStorage.setItem('cart', JSON.stringify(state));
		});
	}

	return {
		subscribe,
		set,

		/**
		 * Añadir un producto al carrito
		 * @param {string} id - ID del producto a añadir
		 * @param {string} name - Nombre del producto a añadir
		 * @param {number} price - Precio del producto a añadir
		 */
		addItem: (id, name, price) =>
			update((state) => {
				const index = state.items.findIndex(item => item.id === id);

				if (index !== -1) {
					// Actualizar cantidad y subtotal si el producto ya existe
					state.items[index].quantity += 1;
				} else {
					// Añadir nuevo producto al carrito
					state.items.push({ id, name, price, quantity: 1 });
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
		clearCart: () => set({
			items: [],
			subtotal: 0,
			quantity: 0,
		})
	};
}

function createDatos() {
	const { subscribe, set, update } = writable(getInitialDatosState());

	if (typeof localStorage !== 'undefined') {
		subscribe((state) => {
			localStorage.setItem('datos', JSON.stringify(state));
		});
	}

	return {
		subscribe,
		set,
		update
	}
}

export const cart = createCart();
export const datos = createDatos();