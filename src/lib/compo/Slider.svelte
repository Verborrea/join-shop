<script lang="ts">
	export let images, alt

	function show(index: number) {
		const slider = document.querySelector('.slider') as HTMLElement;
		const imageWidth = slider.clientWidth;
		const scrollLeftValue = imageWidth * index;

		slider.scroll({
			left: scrollLeftValue,
			behavior: 'smooth' // Movimiento suave
		});
	}
</script>

<article class="fcol g2">
	<div class="slider">
		{#each images as src}
			<div class="img-container">
				<img {src} {alt}>
			</div>
		{/each}
	</div>
	<div class="wrap fc g2">
		{#each images as src, index}
			<button type="button" on:click={() => show(index)}>
				<img class="thumbnail" {src} {alt}>
			</button>
		{/each}
	</div>
</article>

<style>
	.wrap {
		flex-wrap: wrap;
	}
	.slider {
		width: 100%;
		display: flex;
		overflow-x: scroll;
    aspect-ratio: 1;
    scroll-snap-type: x mandatory;
		border-radius: 1em;
	}
	.img-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		min-width: 100%;
		aspect-ratio: 1;
		background: #eee;
		scroll-snap-align: center;
		overflow: hidden;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	.thumbnail {
		width: 4em;
		height: 4em;
		object-fit: cover;
		border-radius: 0.5em;
	}
</style>