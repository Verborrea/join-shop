<script>
	import Slider from "$lib/compo/Slider.svelte"
	import { cart } from "$lib/stores.js"
	import Product from "$lib/compo/Product.svelte"

	export let data

	$: products = data.products

	$: final_price = data.product.discount ?
		data.product.price * data.product.discount / 100 :
		data.product.price

	function addProduct() {
		cart.addItem(data.product.id, final_price)
	}
	function removeProduct() {
		cart.removeItem(data.product.id)
	}

	$: cantidad = $cart.items.filter(item => item.id === data.product.id).reduce(
		(acc, cur) => acc + cur.quantity,
		0
	)
</script>

<svelte:head>
	<title>Productos | Join Shop</title>
</svelte:head>

<a href="/productos"><h3>Regresar a la tienda</h3></a>
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
		<section class="fc between g4">
			<span>Precio: </span>
			<p>
				{#if data.product.discount}
					<span class="tached">S/&nbsp;{data.product.price}</span>
				{/if}
				<strong>S/&nbsp;{final_price.toFixed(2)}</strong>
			</p>
		</section>
		<section class="btns fc between">
			<span>En tu carrito</span>
			<div class="fc g4">
				<button class=btn type="button" on:click={removeProduct}>-</button>
				<span>{cantidad}</span>
				<button class=btn type="button" on:click={addProduct}>+</button>
			</div>
		</section>
	</section>
</article>
<article>
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
	.btn {
		width: 2em;
    height: 2em;
    border: 2px solid;
    display: flex;
    align-items: center;
    justify-content: center;
	}
	.product {
		--min-grid-absolute-size: 16rem;
		--max-grid-relative-size: 50%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(max(min(var(--min-grid-absolute-size), 100%), var(--max-grid-relative-size) - 1rem), 1fr));
		gap: 1rem;
	}
	.products {
		--min-grid-absolute-size: 16rem;
		--max-grid-relative-size: 33%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(max(min(var(--min-grid-absolute-size), 100%), var(--max-grid-relative-size) - 1rem), 1fr));
		gap: 1rem;
	}
	@media (max-width: 750px) {
		h1 {
			font-size: 24px;
		}
	}
</style>