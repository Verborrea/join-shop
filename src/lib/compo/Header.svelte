<script lang="ts">
	export let show: Boolean
</script>

<header class="fc between p4 g4">
	<h1>Join Shop</h1>
	<nav class="fc g4">
		<a href="/">Inicio</a>
		<a href="/">Tienda</a>
		<button type="button" on:click={()=>{show = !show}}>Carrito</button>
	</nav>
</header>

<style>
	header {
		border-bottom: 2px solid;
	}
</style>