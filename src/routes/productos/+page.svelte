<script lang="ts">
	import { goto } from '$app/navigation';

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

<section class="mobile-categories fcol g4">
	<h1>Categoría:</h1>
	<select name="categories" id="categories" on:change={e => routeTo(e)}>
		<option value="all" selected>Todas las categorias</option>
		{#each categories as category}
			<option value={category.id}>{category.name}</option>
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
	.products {
		--min-grid-absolute-size: 16rem;
		--max-grid-relative-size: 33%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(max(min(var(--min-grid-absolute-size), 100%), var(--max-grid-relative-size) - 1rem), 1fr));
		gap: 1rem;
	}
	.mobile-categories {
		display: none;
	}
	@media (max-width: 700px) {
		.mobile-categories {
			display: flex;
		}
	}
</style>
