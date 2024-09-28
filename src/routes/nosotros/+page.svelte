<script lang="ts">
	import Cart from "$lib/compo/Cart.svelte";
	import Footer from "$lib/compo/Footer.svelte";
	import Header from "$lib/compo/Header.svelte";

	let show_cart = false
</script>

<svelte:head>
	<title>Nosotros | Join Shop</title>
</svelte:head>

<Header bind:show_cart={show_cart}/>
<main>
	<article class="p4 fcol g2">
		<h1>Nosotros</h1>
		<p>En esta página se hablará de nosotros.</p>
		<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut numquam nihil suscipit unde quidem ab repellat quasi commodi itaque, reiciendis et repellendus in, illum id natus velit eligendi, accusamus recusandae?</p>
	</article>
	<Cart bind:show_cart={show_cart}/>
</main>
<Footer/>

<style>
	main {
		position: relative;
		min-height: calc(100vh - 162px);
		overflow-x: hidden;
	}
	article {
		overflow-y: scroll;
		max-height: calc(100vh - 162px);
		max-width: 60ch;
    margin: auto;
	}
	@media (max-width: 700px) {
		main {
			min-height: calc(100vh - 141px);
		}
		article {
			max-height: calc(100vh - 141px);
		}
	}
	@media (max-width: 400px) {
		main {
			min-height: calc(100vh - 130px);
		}
		article {
			max-height: calc(100vh - 130px);
		}
	}
</style>