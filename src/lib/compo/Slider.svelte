<script>
	export let images, alt
</script>

<div class="slider">
	{#each images as src}
		<div class="img-container">
			<img {src} {alt}>
		</div>
	{/each}
</div>

<style>
	.slider {
		width: 100%;
		display: flex;
		overflow-x: scroll;
    aspect-ratio: 1;
    scroll-snap-type: x mandatory;
	}
	.img-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: calc(100vw - 2em);
		aspect-ratio: 1;
		background: #dfdfdf;
		scroll-snap-align: center;
	}
	img {
		width: 100%;
	}
</style>