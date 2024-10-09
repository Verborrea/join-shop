<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import Product from '$lib/compo/Product.svelte'

	export let data

	let categories_promise = data.categories_promise

	$: category = $page.url.searchParams.get('category')
	$: c_page = $page.url.searchParams.get('page') || 0

	function setCategory(cat_id: string|null) {
		const url = new URL(window.location.href)
		url.searchParams.set('page', '0')
		if (cat_id) {
			url.searchParams.set('category', cat_id)
			goto(url)
		} else {
			url.searchParams.delete('category')
			goto(url)
		}
	}

	function setPage(_page: number) {
		const url = new URL(window.location.href)
		url.searchParams.set('page', _page.toString())
		goto(url)
	}
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

{#await data.products_promise}
	<p>Cargando...</p>
{:then products}
	<section class="products g4">
		{#each products.documents as product}
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
	<section class="pagination fc g2">
		{#each { length: Math.ceil(products.total/12) } as _, index}
			<button type="button" class="btn" class:btn-primary={c_page == index} on:click={() => setPage(index)}>
				{index + 1}
			</button>
		{/each}
	</section>
{/await}

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
	.categories button {
		white-space: nowrap;
	}
	.products {
		--min-grid-absolute-size: 12rem;
		--max-grid-relative-size: 25%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(max(min(var(--min-grid-absolute-size), 100%), var(--max-grid-relative-size) - 1rem), 1fr));
		gap: 1rem;
	}
	.pagination {
		justify-content: center;
	}
</style>
