<script lang="ts">
	import { pushState } from '$app/navigation'
	import Product from "$lib/compo/Product.svelte";

	export let data

	let { categories_promise, products_promise, category } = data
	let allProducts: any[] = []
	let products: any[] = []

	async function loadProducts() {
		try {
			const products_list = await products_promise;
			allProducts = products_list.documents;
			if (category) {
				products = allProducts.filter(p => p.categories.some((c: any) => c.$id === category))
			} else {
				products = allProducts
			}
		} catch (error) {
			console.error('Error loading products:', error);
		}
	}

	function setCategory(cat_id: string|null) {
		category = cat_id
		const url = new URL(window.location.href)
		if (cat_id) {
			url.searchParams.set('category', cat_id)
			products = allProducts.filter(p => p.categories.some((c: any) => c.$id === category))
		} else {
			url.searchParams.delete('category')
			products = allProducts
		}
		pushState(url, {})
	}
	
	loadProducts()
</script>


<svelte:head>
	<title>Productos | Join Shop</title>
</svelte:head>


	
<section class="fcol g4">
	{#await categories_promise}
		<h1>Cargando...</h1>
	{:then categories}
		<div class="categories fc g2 px4">
			<button type="button" class="btn" on:click={() => setCategory(null)} class:btn-primary={!category}>Todos</button>
			{#each categories.documents as _category}
				<button type="button" class="btn" on:click={() => setCategory(_category.$id)} class:btn-primary={category === _category.$id}>
					{_category.name}
				</button>
			{/each}
		</div>
		<h1>{categories.documents.find(c => c.$id === category)?.name || 'Nuestros Productos'}</h1>
	{/await}
</section>

<section class="products g4">
	{#each products as product}
		<Product
			id={product.$id}
			src={product.images[0]}
			name={product.name}
			price={product.price}
			discount={product.discount}
			categories={product.categories}
		/>
	{/each}
</section>

<style>
	h1 {
		font-size: 2em;
	}
	.categories {
		position: relative;
		left: -1em;
		right: -1em;
		width: 100vw;
		overflow-x: scroll;

		scrollbar-width: none;
		-ms-overflow-style: none;
	}
	.categories::-webkit-scrollbar { 
		display: none;
	}
	.products {
		--min-grid-absolute-size: 12rem;
		--max-grid-relative-size: 25%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(max(min(var(--min-grid-absolute-size), 100%), var(--max-grid-relative-size) - 1rem), 1fr));
		gap: 1rem;
	}
</style>
