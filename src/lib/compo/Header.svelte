<script lang="ts">
	import { cart } from "$lib/stores.js"

	export let show_cart: Boolean

	let active = false

	function showCart() {
		show_cart = !show_cart
	}
</script>

<header class="fc between p4 g4">
	<a href="/"><h1>Join Shop</h1></a>
	<div class="fc g4">
		<nav class="fc g4" class:active>
			<a href="/" on:click={() => active = false}>Inicio</a>
			<a href="/nosotros" on:click={() => active = false}>Nosotros</a>
			<a href="/productos" on:click={() => active = false}>Productos</a>
		</nav>
		<button type="button" class="cart" on:click={showCart}>
			<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
			<span>{$cart.quantity}</span>
		</button>
		<button type="button" class="burger" on:click={()=>{active = !active}}>
			{#if active}
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M481-406 290-214q-16 16-38 15.5T214-215q-15-16-14.5-37t15.5-37l190-191-191-193q-15-16-15-37t15-37q16-16 38-16.5t38 15.5l191 192 189-192q16-16 38-15.5t38 16.5q15 16 14.5 37T745-673L555-480l190 191q15 15 15.5 36.5T746-215q-16 16-38 16.5T670-214L481-406Z"/></svg>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
			{/if}
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
		position: sticky;
		inset: 0 0 auto 0;
		background-color: white;
		z-index: 4;
	}
	.burger {
		display: none;
		z-index: 4;
	}
	.cart {
		position: relative;
	}
	.cart span {
		position: absolute;
    background-color: black;
    color: white;
    font-size: 16px;
    width: 24px;
		height: 24px;
    top: -8px;
    right: -8px;
		border-radius: 50%;
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
			left: 0;
			right: 0;
			top: 0;
			height: 100dvh;
			justify-content: center;
			transition: transform .5s;
			transform: translateY(-100%);
			font-size: 1.5em;
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