<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

  import Product from "$lib/compo/Product.svelte";

	export let data

	const categories = data.categories
	$: products = data.products

	function routeTo(e: any) {
		const category = e.target!.value
		if (category === 'all') {
			goto('/productos')
		} else {
			goto(`/productos?category=${e.target.value}`)
		}
	}
</script>

<svelte:head>
	<title>Productos | Join Shop</title>
</svelte:head>

<h1>Nuestros Productos</h1>
<section class="fc g4">
	<strong>Categoría:</strong>
	<select name="categories" id="categories" on:change={e => routeTo(e)}>
		<option value="all" selected={!$page.url.searchParams.has('category')}>Todas las categorias</option>
		{#each categories as category}
			<option value={category.id} selected={$page.url.searchParams.get('category') === category.id}>{category.name}</option>
		{/each}
	</select>
</section>
<section class="products g4">
	{#each products as product}
		<Product
			id={product.id}
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
	.products {
		--min-grid-absolute-size: 16rem;
		--max-grid-relative-size: 33%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(max(min(var(--min-grid-absolute-size), 100%), var(--max-grid-relative-size) - 1rem), 1fr));
		gap: 1rem;
	}
	@media (max-width: 700px) {
		strong {
			display: none;
		}
		select {
			width: 100%;
		}
	}
</style>
