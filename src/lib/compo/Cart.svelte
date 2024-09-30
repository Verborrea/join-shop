<script lang="ts">
	import { cart, datos } from "$lib/stores";

	export let show_cart: Boolean
</script>

<article class="cart fcol p4 g4" class:show={show_cart}>
	<section class="fcol g4">
		<div class="fc between">
			<h1>Mi Carrito</h1>
			<button type="button" on:click={() => show_cart = false}>
				<svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 -960 960 960" width="1.5em" fill="currentColor"><path d="M481-406 290-214q-16 16-38 15.5T214-215q-15-16-14.5-37t15.5-37l190-191-191-193q-15-16-15-37t15-37q16-16 38-16.5t38 15.5l191 192 189-192q16-16 38-15.5t38 16.5q15 16 14.5 37T745-673L555-480l190 191q15 15 15.5 36.5T746-215q-16 16-38 16.5T670-214L481-406Z"/></svg>
			</button>
		</div>
		{#if $cart.quantity > 0}
			<div class="fcol g4">
				{#each $cart.items as item (item.id)}
					<article class="item">
						<div class="fcol g2">
							<a href="/productos/{item.id}" on:click={() => {show_cart = false; document.querySelector('main')?.scroll({
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
		{:else}
		<p>Añade productos a tu carrito!</p>
		{/if}
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
			<strong>S/&nbsp;{$datos.envio.toFixed(2)}</strong>
		</div>
	</section>
	{#if $datos.coords.length === 0}
	<a href="/mapa" class="btn btn-error">Seleccione su ubicación</a>
	{/if}
	<section>
		<div class="between">
			<strong>Total</strong>
			<strong>S/&nbsp;{($datos.envio + $cart.subtotal).toFixed(2)}</strong>
		</div>
	</section>
	<button class="btn" type="button" on:click={cart.clearCart}>Limpiar Carrito</button>
	<button class="btn btn-primary" type="button" disabled>Comprar</button>
</article>

<style>
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
	.btn {
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
	.btns .btn {
		width: 1.5em;
		height: 1.5em;
		padding: 0;
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