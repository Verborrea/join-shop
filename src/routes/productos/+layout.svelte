<script lang="ts">
	import Cart from "$lib/compo/Cart.svelte";
	import Footer from "$lib/compo/Footer.svelte";
	import Header from "$lib/compo/Header.svelte";

	let show_cart = false

	export let data

	const categories = data.categories
</script>

<Header bind:show_cart={show_cart}/>
<main>
	<article class="px4 py8 fcol g8">
		<slot/>
	</article>
	<Cart bind:show_cart={show_cart}/>
</main>
<Footer/>

<style>
	main {
		position: relative;
		min-height: calc(100dvh - 90px - 72px);
	}
	article {
		margin: auto;
		max-width: 1200px;
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