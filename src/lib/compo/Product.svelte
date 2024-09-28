<script>
	export let name, discount = false
</script>

<article class="g2">
	<img src="https://i.redd.it/aq38c844r6771.gif" alt="No sé">
	<section class="info g2">
		<h1>{name}</h1>
		
	</section>
	<div class="actions fc between">
		<button type="button">Comprar</button>
		<p class="price">
			{#if discount}
				<span class="tached">S/ 899.99</span>
			{/if}
			<strong>S/ 105.99</strong>
		</p>
	</div>
</article>

<style>
	.tached {
		text-decoration: line-through;
	}
	img {
		width: 100%;
	}
	article {
		display: grid;
    grid-template-rows: auto 1fr auto;
	}
	.info {
    display: grid;
    grid-template-rows: 1fr;
	}
</style>