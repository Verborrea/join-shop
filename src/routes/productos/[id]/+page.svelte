<script>
	import Slider from "$lib/compo/Slider.svelte"
	import Product from "$lib/compo/Product.svelte"
	import { cart } from "$lib/stores.js"

	export let data

	$: products = data.products

	$: final = data.product.discount ?
		data.product.price * data.product.discount / 100 :
		data.product.price

	$: cantidad = $cart.items.filter(item => item.id === data.product.id).reduce(
		(acc, cur) => acc + cur.quantity,
		0
	)
</script>

<svelte:head>
	<title>Productos | Join Shop</title>
</svelte:head>

<a href="/productos">
	<h3 class="fc g1">
		<svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="currentColor"><path d="M562-221 302-481l260-260 74 74-186 186 186 186-74 74Z"/></svg>
		Regresar a la tienda
	</h3>
</a>
<article class="product">
	<Slider images={data.product.images} alt={data.product.name}/>
	<section class="data fcol g4">
		<h1>{data.product.name}</h1>
		<ul>
			{#each data.product.categories as category}
				<li><a href="/productos?category={category.id}">{category.name}</a></li>
			{/each}
		</ul>
		<p>{data.product.desc}</p>
		{#if data.product.discount}
			<p>Este producto cuenta con {data.product.discount}% de Descuento</p>
		{/if}
		<p class="precio">
			{#if data.product.discount}
				<span class="tached">S/&nbsp;{data.product.price}</span>
			{/if}
			<strong>S/&nbsp;{final.toFixed(2)}</strong>
		</p>
		<section class="fc g4">
			<button class="btn btn-square" type="button" on:click={() => cart.removeItem(data.product.id)}>-</button>
			<span>{cantidad}</span>
			<button class="btn btn-square" type="button" on:click={() => cart.addItem(data.product.id, data.product.name, final)}>+</button>
		</section>
	</section>
</article>
<article class="fcol g4">
	<h1>Otros artículos similares</h1>
	<section class="products">
		{#each products as product}
			<Product
				id={product.id}
				name={product.name}
				price={product.price}
				discount={product.discount}
				categories={product.categories}
				src={product.images[0]}
			/>
		{/each}
	</section>
</article>

<style>
	h1 {
		font-size: 2em;
	}
	ul {
		padding: 0;
		list-style: none;
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
	}
	.btn-square {
		width: 2em;
		height: 2em;
	}
	.product {
		--min-grid-absolute-size: 20rem;
		--max-grid-relative-size: 50%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(max(min(var(--min-grid-absolute-size), 100%), var(--max-grid-relative-size) - 1rem), 1fr));
		align-items: center;
		gap: 2em;
	}
	.products {
		--min-grid-absolute-size: 16rem;
		--max-grid-relative-size: 33%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(max(min(var(--min-grid-absolute-size), 100%), var(--max-grid-relative-size) - 1rem), 1fr));
		gap: 1rem;
	}
	.precio {
		font-size: 1.5em;
	}
	@media (max-width: 700px) {
		h1 {
			font-size: 24px;
		}
	}
</style>