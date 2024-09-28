<script lang="ts">
	export let show_cart: Boolean, show_categories: Boolean

	let active = false

	function showCart() {
		show_categories = false
		show_cart = !show_cart
	}
	function showCategories() {
		show_cart = false
		show_categories = !show_categories
	}
</script>

<header class="fc between p4 g4">
	<h1>Join Shop</h1>
	<div class="fc g4">
		<nav class="fc g4" class:active>
			<a href="/">Inicio</a>
			<a href="/">Nosotros</a>
			<a href="/">Productos</a>
		</nav>
		<button type="button" on:click={showCategories}>
			<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m260-520 220-360 220 360H260ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Zm580-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-500-20h160v-160H200v160Zm202-420h156l-78-126-78 126Zm78 0ZM360-340Zm340 80Z"/></svg>
		</button>
		<button type="button" on:click={showCart}>
			<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
		</button>
		<button type="button" class="burger" on:click={()=>{active = !active}}>
			<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
		</button>
	</div>
</header>

<style>
	svg {
		width: 1.5em;
		height: 1.5em;
	}
	header {
		border-bottom: 2px solid;
	}
	.burger {
		display: none;
		z-index: 2;
	}
	@media (max-width: 700px) {
		h1 {
			height: 38px;
		}
		.burger {
			display: flex;
		}
		nav {
			flex-direction: column;
			position: absolute;
			background: white;
			inset: 0;
			z-index: 1;
			justify-content: center;
			transition: transform .5s;
			transform: translateY(-100%);
			font-size: 2em;
		}
		nav.active {
			transform: translateY(0);
		}
		svg {
			width: 2em;
			height: 2em;
		}
	}
</style>