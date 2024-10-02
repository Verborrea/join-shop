<script lang="ts">
	import { cart } from "$lib/stores.js"

	export let id, src, name, discount, price, categories

	$: final = discount ? price * discount / 100 : price
</script>

<article class="g2">
	<div class="img-cont">
		<a href="/productos/{id}">
			<img {src} alt={name}>
		</a>
		<button type="button" on:click={() => cart.addItem(id, name, price)} title="Añadir Producto" >
			<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M427-428H221q-22 0-37.5-15.5T168-481q0-22 15.5-37.5T221-534h206v-206q0-22 15.5-37.5T480-793q22 0 37.5 15.5T533-740v206h206q22 0 37.5 15.5T792-481q0 22-15.5 37.5T739-428H533v206q0 22-15.5 37.5T480-169q-22 0-37.5-15.5T427-222v-206Z"/></svg>
		</button>
	</div>
	<section class="info g2">
		<a href="/productos/{id}"><h1>{name}</h1></a>
		<div class="categories fc g2">
			{#each categories as category}
				<a href="/productos?category={category.id}">{category.name}</a>
			{/each}
		</div>
	</section>
	<div class="actions fc between">
		<p class="price">
			{#if discount}
				<span class="tached">S/&nbsp;{price.toFixed(2)}</span>
			{/if}
			<strong>S/&nbsp;{final.toFixed(2)}</strong>
		</p>
		{#if discount}
		<p class="discount">-{discount.toFixed(0)}%</p>
		{/if}
	</div>
	
</article>

<style>
	.discount {
		background: black;
    color: white;
    padding-inline: .25em;
		border-radius: .25em;
	}
	h1 {
		font-size: 1em;
	}
	.img-cont {
		position: relative;
		overflow: hidden;
		border-radius: 1em;
	}
	.img-cont:hover img {
		scale: 1.1;
	}
	.img-cont button {
		color: black;
		position: absolute;
		bottom: 1em;
		right: 1em;
		background: white;
		border-radius: 50%;
		padding: 0.5em;
	}
	.img-cont button:hover {
		color: white;
		background: black;
	}
	img {
		width: 100%;
		height: 320px;
		transition: scale .5s;
	}
	article {
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
	.categories {
		flex-wrap: wrap;
	}
	.categories a {
		font-weight: normal;
	}
	.info {
    display: grid;
    grid-template-rows: 1fr;
	}
</style>