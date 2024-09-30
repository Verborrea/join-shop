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
	<aside class="desktop-categories p4">
		<div class="cont fcol g4">
			<h1>Categorías</h1>
			<nav class="fcol">
				<a class="py2" href="/productos">Todas las categorías</a>
				{#each categories as category}
				<a class="py2" href="/productos/?category={category.id}">{category.name}</a>
				{/each}
			</nav>
		</div>
	</aside>
	<article id="wasa" class="p4 fcol g4">
		<slot/>
	</article>
	<Cart bind:show_cart={show_cart}/>
</main>
<!-- <Footer/> -->

<style>
	main {
		position: relative;
		/* display: grid; */
		/* grid-template-columns: 280px 1fr; */
		/* grid-template-columns: 1fr; */
		min-height: calc(100vh - 90px);
		overflow-x: hidden;
	}
	aside {
		display: none;
		border-right: 2px solid;
	}
	article {
		margin: auto;
		max-width: 1080px;
	}
	article, aside {
		/* overflow-y: scroll; */
		max-height: calc(100vh - 90px);
	}
	aside, aside a {
		transition: transform .5s;
	}
	aside a:hover {
		transform: translateX(0.5em);
	}
	aside a:first-child {
		padding-top: 0;
	}
	@media (max-width: 700px) {
		article, aside {
			max-height: calc(100vh - 76px);
		}
		main {
			grid-template-columns: 1fr;
			max-height: inherit;
		}
		aside {
			display: none;
		}
	}

	@media (max-width: 400px) {
		article {
			max-height: calc(100vh - 72px);
		}
	}
</style>