<script lang="ts">
	import Cart from "$lib/compo/Cart.svelte";
	import Footer from "$lib/compo/Footer.svelte";
	import Header from "$lib/compo/Header.svelte";

	let show_cart = false
</script>

<svelte:head>
	<title>Join Shop</title>
</svelte:head>

<Header bind:show_cart={show_cart}/>
<main>
	<article class="p4 fcol g4">
		<h1>Hola!</h1>
		<h2>Bienvenido a Join Shop</h2>
		<p>Este es un demo de tienda virtual completamente personalizable.</p>
		<p>Dirigete a la tienda para empezar.</p>
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