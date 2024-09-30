<script lang="ts">
	import { cart } from "$lib/stores";

	let envio = 3.5

	export let show_cart: Boolean
</script>

<article class="cart fcol p4 g4" class:show={show_cart}>
	<section class="fcol g4">
		<div class="fc between">
			<h1>Mi Carrito</h1>
			<button class="limpiar btn" type="button" on:click={() => show_cart = false}>Cerrar</button>
		</div>
		<div class="fcol g4">
			{#each $cart.items as item (item.id)}
				<article class="item">
					<div class="fcol g2">
						<a href="/productos/{item.id}" on:click={() => {show_cart = false; document.querySelector('#wasa')?.scroll({
							top: 0,
							behavior: "smooth",
						});}}>{item.name}</a>
						<section class="btns fc g2">
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
	<button class="limpiar btn" type="button" on:click={cart.clearCart}>Limpiar Carrito</button>
	<button class="limpiar btn btn-primary" type="button" on:click={cart.clearCart}>Comprar</button>
</article>

<style>
	.btn-primary {
		background: black;
		color: white;
	}
	.btn-primary:hover {
		background: #1e1e1e;
	}
	.cart {
		max-height: calc(100vh - 90px);
    overflow-y: scroll;
		border-left: 2px solid;
		position: fixed;
    right: 0;
    top: 90px;
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
		align-items: end;
	}
	.item a, .item .price {
		font-weight: normal;
		font-size: 18px;
		line-height: 1.1;
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
			top: 76px;
		}
	}
	@media (max-width: 400px) {
		.cart {
			max-height: calc(100vh - 72px);
			top: 72px;
		}
	}
</style>