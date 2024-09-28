<script lang="ts">
	import CartProduct from "./CartProduct.svelte";
	export let show_cart: Boolean
</script>

<article class="fcol p4 g4" class:show={show_cart}>
	<section class="fcol g4">
		<h1>Mis Productos</h1>
		<div class="fcol">
			<CartProduct/>
			<CartProduct/>
			<CartProduct/>
			<CartProduct/>
			<CartProduct/>
			<CartProduct/>
			<CartProduct/>
			<CartProduct/>
			<CartProduct/>
		</div>
	</section>
	<section>
		<div class="between">
			<strong>Costo de Envío</strong>
			<strong>S/0.10</strong>
		</div>
	</section>
	<section>
		<div class="between">
			<strong>Total</strong>
			<strong>S/100.00</strong>
		</div>
	</section>
</article>

<style>
	article {
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
	article.show {
		transform: translateX(0);
	}
	@media (max-width: 700px) {
		article {
			width: 100%;
			border-left: 0px;
			max-height: calc(100vh - 76px);
		}
	}
	@media (max-width: 400px) {
		article {
			max-height: calc(100vh - 72px);
		}
	}
</style>