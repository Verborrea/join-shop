<script>
	import Cart from "$lib/compo/Cart.svelte";
	import Footer from "$lib/compo/Footer.svelte";
	import Header from "$lib/compo/Header.svelte";
    import Product from "$lib/compo/Product.svelte";

	let show = false
</script>

<Header bind:show={show}/>
<main>
	<aside id="categories" class="p4">
		<div class="cont fcol g4">
			<h1>Categorías</h1>
			<nav class="fcol">
				<a class="py2" href="/">Todas las categorías</a>
				<a class="py2" href="/">Salud y cuidado personal</a>
				<a class="py2" href="/">Una categoría con un nombre muy grande</a>
				<a class="py2" href="/">Tecnología</a>
				<a class="py2" href="/">Hogar</a>
				<a class="py2" href="/">Todas las categorías</a>
				<a class="py2" href="/">Salud y cuidado personal</a>
				<a class="py2" href="/">Una categoría con un nombre muy grande</a>
				<a class="py2" href="/">Tecnología</a>
				<a class="py2" href="/">Hogar</a>
				<a class="py2" href="/">Todas las categorías</a>
				<a class="py2" href="/">Salud y cuidado personal</a>
				<a class="py2" href="/">Una categoría con un nombre muy grande</a>
				<a class="py2" href="/">Tecnología</a>
				<a class="py2" href="/">Hogar</a>
				<a class="py2" href="/">Hogar</a>
				<a class="py2" href="/">Todas las categorías</a>
				<a class="py2" href="/">Salud y cuidado personal</a>
				<a class="py2" href="/">Una categoría con un nombre muy grande</a>
				<a class="py2" href="/">Tecnología</a>
				<a class="py2" href="/">Hogar</a>
			</nav>
		</div>
	</aside>
	<article class="p4 fcol g4">
		<h1>Bienvenido a la tienda</h1>
		<div class="products g4">
			<Product name="Nombre corto"/>
			<Product discount name="Nombre muy muy largo"/>
			<Product name="Nombre muy muy largo Entonemos un himno de gloria"/>
			<Product discount name="Nombre corto"/>
		</div>
	</article>
	<Cart bind:show={show}/>
</main>
<Footer/>

<style>
	main {
		position: relative;
		display: grid;
		grid-template-columns: 280px 1fr;
		min-height: calc(100vh - 72px - 90px);
		overflow-x: hidden;
	}
	aside {
		border-right: 2px solid;
	}
	article, aside {
		overflow-y: scroll;
		max-height: calc(100vh - 162px);
	}
	aside a {
		transition: transform 0.5s;
	}
	aside a:hover {
		transform: translateX(0.5em);
	}
	aside a:first-child {
		padding-top: 0;
	}
	.products {
		--min-grid-absolute-size: 16rem;
    --max-grid-relative-size: 33%;
		display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(min(var(--min-grid-absolute-size), 100%), var(--max-grid-relative-size) - 1rem), 1fr));
    gap: 1rem;
	}

	@media (max-width: 700px) {
		main {
			grid-template-columns: 1fr;
		}
		aside {
			width: 280px;
			position: absolute;
			background: white;
			transform: translateX(-100%);
		}
	}
</style>
