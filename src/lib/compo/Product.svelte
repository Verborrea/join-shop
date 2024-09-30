<script lang="ts">
	import { cart } from "$lib/stores.js"

	export let id, src, name, discount, price, categories

	$: final = discount ? price * discount / 100 : price

	function scroll() {
		document.querySelector('#wasa')!.scroll({
			top: 0,
			behavior: "smooth",
		});
	}
</script>

<article class="g2">
	<a href="/productos/{id}" on:click={scroll} class="img-cont">
		<img {src} alt={name}>
	</a>
	<section class="info g2">
		<a href="/productos/{id}" on:click={scroll}><h1>{name}</h1></a>
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
		<p>-{discount.toFixed(0)}%</p>
		{/if}
	</div>
	
</article>

<style>
	h1 {
		font-size: 1em;
	}
	.img-cont {
		overflow: hidden;
		border-radius: 1em;
	}
	.img-cont:hover img {
		scale: 1.1;
	}
	img {
		width: 100%;
		height: 400px;
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