<script lang="ts">
	import { cart } from "$lib/stores";

	let envio = 3.5

	export let show_cart: Boolean
</script>

<article class="cart fcol p4 g4" class:show={show_cart}>
	<section class="fcol g4">
		<div class="fc between">
			<h1>Mi Carrito</h1>
			<button class="limpiar btn" type="button" on:click={cart.clearCart}>Limpiar</button>
		</div>
		<div class="fcol g4">
			{#each $cart.items as item (item.id)}
				<article class="item">
					<div class="fcol g1">
						<a href="/productos/{item.id}">{item.name}</a>
						<section class="btns fc g4">
							<button class=btn type="button" on:click={() => cart.removeItem(item.id)}>-</button>
							<span>{item.quantity}</span>
							<button class=btn type="button" on:click={() => cart.addItem(item.id, item.name, item.price)}>+</button>
						</section>
					</div>
					<strong class="price">S/&nbsp;{(item.price * item.quantity).toFixed(2)}</strong>
				</article>
			{/each}
		</div>
	</section>
	<section>
		<div class="between">
			<strong>Subtotal</strong>
			<strong>S/&nbsp;{$cart.subtotal.toFixed(2)}</strong>
		</div>
	</section>
	<section>
		<div class="between">
			<strong>Costo de Envío</strong>
			<strong>S/&nbsp;{envio.toFixed(2)}</strong>
		</div>
	</section>
	<section>
		<div class="between">
			<strong>Total</strong>
			<strong>S/&nbsp;{(envio + $cart.subtotal).toFixed(2)}</strong>
		</div>
	</section>
</article>

<style>
	.cart {
		max-height: calc(100vh - 90px);
    overflow-y: scroll;
		border-left: 2px solid;
		position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 360px;
    background: white;
    transition: transform .5s;
    transform: translateX(100%);
	}
	.cart.show {
		transform: translateX(0);
	}
	.limpiar {
		width: unset;
		height: unset;
		padding: 0.25em 1em;
	}
	.item {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1em;
		align-items: center;
	}
	.item a {
		font-size: 18px;
		line-height: 1.1;
	}
	.item .price {
		font-size: 18px;
    font-weight: normal;
	}
	.item strong {
		text-align: end;
	}
	.item .btn {
		width: 1.5em;
		height: 1.5em;
	}
	@media (max-width: 700px) {
		.cart {
			width: 100%;
			border-left: 0px;
			max-height: calc(100vh - 76px);
		}
	}
	@media (max-width: 400px) {
		.cart {
			max-height: calc(100vh - 72px);
		}
	}
</style>