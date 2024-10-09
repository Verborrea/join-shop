<script lang="ts">
	import Cart from "$lib/compo/Cart.svelte";
	import Footer from "$lib/compo/Footer.svelte";
	import Header from "$lib/compo/Header.svelte";

	import src from "$lib/images/image.avif"

	let show_cart = false
</script>

<svelte:head>
	<title>Nosotros | Join Shop</title>
</svelte:head>

<Header bind:show_cart={show_cart}/>
<main>
	<article class="px4 py8 fcol g4">
		<h1>Nosotros</h1>
		<h2>¿Qué es la medicina holística?</h2>
		<p>Bienvenido a una nueva forma de ver la vida.</p>
		<img {src} alt="Medicina Holística">
		<p>La <strong>medicina holística</strong> es mucho más que solo tratar enfermedades: es un enfoque integral que te ayuda a alcanzar el <strong>bienestar total</strong>. Al combinar lo mejor de la medicina tradicional con terapias naturales como la <strong>acupuntura</strong>, la <strong>meditación</strong> y la <strong>herbolaria</strong>, se centra en ti como un ser completo: <strong>cuerpo, mente y espíritu</strong>.</p>
		<p>Imagina un tratamiento que no solo combate los síntomas, sino que te ayuda a sentirte mejor en todos los niveles. ¿Estás buscando un estilo de vida equilibrado y una salud duradera? La medicina holística te ofrece una solución personalizada, promoviendo la <strong>autocuración</strong> y un bienestar que va más allá de lo físico. ¡Toma control de tu salud y vive al máximo!</p>
	</article>
	<Cart bind:show_cart={show_cart}/>
</main>
<Footer/>

<style>
	h1 {
		font-size: 2em;
	}
	main {
		position: relative;
		min-height: calc(100dvh - 90px - 72px);
	}
	article {
		max-width: 55ch;
    margin: auto;
	}
	img {
		border-radius: 1em;
		width: 100%;
		aspect-ratio: 768 / 512;
	}
	@media (max-width: 700px) {
		main {
			min-height: calc(100dvh - 76px - 65px);
		}
	}
	@media (max-width: 400px) {
		main {
			min-height: calc(100dvh - 72px - 58px);
		}
	}
</style>