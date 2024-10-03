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
	<article class="px4 py8 fcol g4 center">
		<div class="big">&</div>
		<h1>Hey!</h1>
		<h2>Bienvenido a Ampersand 👋</h2>
		<p>Esta será una tienda virtual funcional muy pronto.</p>
		<p>Dirigete a <a href="/productos">Productos</a> para empezar.</p>
	</article>
	<Cart bind:show_cart={show_cart}/>
</main>
<Footer/>

<style>
	.big {
		font-size: 4em;
		font-weight: 800;
	}
	h1 {
		font-size: 2em;
	}
	main {
		display: flex;
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