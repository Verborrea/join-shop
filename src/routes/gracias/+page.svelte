<script lang="ts">
	import { datos } from "$lib/stores";

	import Cart from "$lib/compo/Cart.svelte";
	import Footer from "$lib/compo/Footer.svelte";
	import Header from "$lib/compo/Header.svelte";

	let show_cart = false
</script>

<svelte:head>
	<title>Gracias | Join Shop</title>
</svelte:head>

<Header bind:show_cart={show_cart}/>
<main>
	<article class="px4 py8 fcol g4">
		<h1>Gracias por su compra 😄</h1>
		<p>Se le envió un correo a <strong>{$datos.email}</strong> con la información de su compra.</p>
		<a href="/productos">Regresar a la tienda</a>
	</article>
	<Cart bind:show_cart={show_cart}/>
</main>
<Footer/>

<style>
	h1 {
		font-size: 2em;
	}
	main {
		position: relative;
		min-height: calc(100dvh - 90px - 72px);
		text-align: center;
		display: flex;
	}
	article {
		max-width: 55ch;
    margin: auto;
	}
	@media (max-width: 700px) {
		main {
			min-height: calc(100dvh - 76px - 65px);
		}
	}
	@media (max-width: 400px) {
		main {
			min-height: calc(100dvh - 72px - 58px);
		}
	}
</style>