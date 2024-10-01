<script lang="ts">
	import Cart from "$lib/compo/Cart.svelte";
	import Footer from "$lib/compo/Footer.svelte";
	import Header from "$lib/compo/Header.svelte";

	let show_cart = false
</script>

<svelte:head>
	<title>Nosotros | Join Shop</title>
</svelte:head>

<Header bind:show_cart={show_cart}/>
<main>
	<article class="px4 py8 fcol g4">
		<h1>Nosotros</h1>
		<p>En esta página se hablará de nosotros.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae enim volutpat, ultricies augue in, accumsan justo. Nullam egestas tortor in nisl lobortis, id cursus leo gravida.</p><p>In vestibulum velit eget nibh bibendum sagittis. Sed volutpat elit sit amet mattis ultrices. Etiam rutrum ante vitae quam aliquet facilisis. Donec porta eros id erat semper finibus. Donec dictum velit vitae lorem ornare, id dapibus ipsum blandit. Duis at imperdiet diam. Praesent aliquam rhoncus urna, eget placerat ligula luctus vel. Ut euismod commodo aliquam. Ut id porttitor enim. Vivamus in enim convallis, mattis lorem ut, efficitur nisl. Ut dapibus elementum est, vel ultricies lectus.
		<p>Etiam varius libero at quam ullamcorper suscipit. Sed et mollis tellus. Nulla malesuada felis a mauris congue, id cursus risus malesuada. Phasellus id mi imperdiet, varius erat et, tincidunt augue. Nullam porta enim a dui ullamcorper dapibus.</p><p>Pellentesque sagittis lacus id velit maximus, nec ornare ligula facilisis. Nam vitae felis porttitor, gravida dui et, fermentum dui. Phasellus hendrerit turpis a gravida ornare. Etiam molestie libero purus, eu dignissim nisl ornare id.</p>
		<p>Vestibulum gravida lacinia vehicula. Morbi molestie velit id eros varius, ut malesuada arcu dignissim. Praesent dolor erat, pharetra et commodo quis, laoreet ac orci.</p><p>Fusce sagittis sagittis enim quis egestas. Duis semper sapien sed efficitur pretium. Duis at aliquam neque. In iaculis lobortis leo at cursus. Duis vestibulum mauris vulputate tellus porttitor, et ultricies neque pharetra. Suspendisse id lacinia enim. Mauris vel tincidunt urna. Nulla lorem erat, sodales faucibus lorem quis, maximus mattis leo. Sed feugiat in ex ac dignissim. Vestibulum id mattis nulla. Proin consectetur mi nec nunc pulvinar ultrices.</p>
		<p>Maecenas facilisis diam magna, non fringilla turpis sollicitudin non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras sed tincidunt turpis. Suspendisse interdum arcu sed diam aliquam, a venenatis lacus lacinia. Ut risus odio, commodo non sem quis, varius viverra urna.</p><p>Nullam nisi nunc, congue ac lacus nec, dapibus iaculis augue. Aliquam ac vestibulum dui. Fusce consequat, leo ut rhoncus lacinia, lacus augue vulputate felis, auctor posuere orci justo a lacus. Integer auctor enim eu tempus molestie. Phasellus vitae congue lectus.</p>
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