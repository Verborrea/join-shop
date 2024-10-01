<script lang="ts">
	import { fade, fly } from "svelte/transition";
	import { cart, datos } from "$lib/stores";

	import Cart from "$lib/compo/Cart.svelte";
	import Footer from "$lib/compo/Footer.svelte";
	import Header from "$lib/compo/Header.svelte";
	import qr from "$lib/images/qr.avif"
    import { goto } from "$app/navigation";

	let show_cart = false
	let step = 4
	let showToast = false
	let src: any = null

	function copyNumber() {
		navigator.clipboard.writeText('910880595').then(() => {
			showToast = true;
			setTimeout(() => {
				showToast = false;
			}, 2000);
		}).catch(err => {
			console.error("Error: ", err);
		});
	}

	function handleFileUpload(event: Event) {
		const fileInput = event.target as HTMLInputElement;
		if (fileInput.files && fileInput.files[0]) {
			const reader = new FileReader();
			reader.onload = (e: ProgressEvent<FileReader>) => {
				src = e.target?.result; // Establecer la imagen como src
			};
			reader.readAsDataURL(fileInput.files[0]); // Leer el archivo como URL
		}
	}

	function finalizar() {
		goto('/gracias')
	}
</script>

<svelte:head>
	<title>Finalizar Compra | Join Shop</title>
</svelte:head>

{#if showToast}
	<div in:fly={{ y: -200, duration: 500 }} out:fly={{ y:-200, duration: 500 }} class="toast">
		🎉&nbsp;&nbsp;Número copiado al portapeles
	</div>
{/if}
<Header bind:show_cart={show_cart}/>
<main class="py4" class:color={step === 3}>
	<article class="px4 py8 fcol g4">
		<h1>Ya casi!</h1>
		{#if step === 1}
			<p>Por favor confirma los productos en tu carrito para continuar.</p>
			{#each $cart.items as item (item.id)}
				<article class="item between">
					<div class="fcol info">
						<a href="/productos/{item.id}" on:click={() => show_cart = false}>{item.name}</a>
						<div class="linea fc g4">
							<strong class="price">S/&nbsp;{(item.price).toFixed(2)}</strong>
							<span>&times;</span>
							<section class="btns fc g2">
								<button class="btn btn-square" type="button" on:click={() => cart.removeItem(item.id)}>-</button>
								<strong>{item.quantity}</strong>
								<button class="btn btn-square" type="button" on:click={() => cart.addItem(item.id, item.name, item.price)}>+</button>
							</section>
							<span>=</span>
						</div>
					</div>
					<strong class="price">S/&nbsp;{(item.price * item.quantity).toFixed(2)}</strong>
				</article>
			{/each}
			<div class="fc between g4">
				<a href="/productos">Volver a la tienda</a>
				<button type="button" class="btn btn-primary" on:click={() => (step++)}>Continuar</button>
			</div>
		{:else if step === 2}
			<p>Ahora llena tus datos para enviarte el pedido.</p>
			<form class="fcol g3">
				<label for="name" class="fcol g1">
					<strong>Nombre</strong>
					<input id="name" name="name" type="text" placeholder="Juan García Perez" bind:value={$datos.name}>
				</label>
				<label for="email" class="fcol g1">
					<strong>Correo Electrónico</strong>
					<input id="email" name="email" type="email" placeholder="juancito@gmail.com" bind:value={$datos.email}>
				</label>
				<label for="phone" class="fcol g1">
					<strong>Teléfono Móvil</strong>
					<input id="phone" name="phone" type="text" placeholder="987 654 321" bind:value={$datos.phone}>
				</label>
				<label for="adrress" class="fcol g1">
					<strong>Dirección</strong>
					<input id="adrress" name="adrress" type="text" placeholder="Urb. La Melgariana 417" bind:value={$datos.address}>
				</label>
			</form>
				<div class="fc between">
					<button type="button" on:click={() => (step--)}><strong>Regresar</strong></button>
					<button type="button" class="btn btn-primary" on:click={() => (step++)} disabled={
						$datos.address == '' || $datos.name == '' || $datos.phone == '' || $datos.email == ''
					}>Continuar</button>
				</div>
		{:else if step === 3}
			<p class="center">Por último, solo queda pagar el producto. Puedes escanear nuestro código QR.</p>
			<div class="img">
				<img class="filter" src={qr} alt="QR de Yape">
				<p class="paga-aqui">Paga aquí con Yape</p>
			</div>
			<div class="or-text">o también puedes:</div>
			<button type="button" class="copy btn btn-primary g2" on:click={copyNumber}>
				<svg width="1.25em" height="1.25em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-md-heavy"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>
				940 185 837
			</button>
			<h1 class="center">S/&nbsp;{($cart.subtotal + $datos.envio).toFixed(2)}</h1>
			<div class="fc between">
				<button type="button" class="white" on:click={() => (step--)}><strong>Regresar</strong></button>
				<button type="button" class="btn btn-primary" on:click={() => (step++)}>Subir Captura</button>
			</div>
		{:else if step === 4}
			<p class="center">Sube tu captura aquí abajo.</p>
			<label for="upload">
				{#if src}
					<img {src} alt="Captura">
				{:else}
					<svg class="nube" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z"/></svg>
				{/if}
			</label>
			<input class="hidden" type="file" name="upload" id="upload" on:change={handleFileUpload}>
			<div class="fc between g4">
				<button type="button" on:click={() => (step--)}><strong>Regresar</strong></button>
				<button type="button" class="btn btn-primary" on:click={finalizar} disabled={!src}>Finalizar Compra</button>
			</div>
		{/if}
	</article>
	<Cart bind:show_cart={show_cart}/>
</main>
<Footer/>

<style>
	.hidden {
		display: none;
	}
	.nube {
		width: 100%;
		height: 100%;
	}
	.copy {
		align-self: center;
		font-size: 1.25em;
	}
	.center {
		text-align: center;
	}
	.or-text {
		display: flex;
		align-items: center;
		text-align: center;
		font-size: 16px;
	}

	.or-text::before, 
	.or-text::after {
		content: '';
		flex: 1;
		border-bottom: 2px solid;
		margin: 0 10px;
	}
	.paga-aqui {
		position: absolute;
		text-align: center;
    color: white;
    background: #0dcbb4;
    border-radius: 1em;
    align-self: center;
    padding: 0.25em 1em;
		bottom: -1em;
    left: 50%;
    transform: translateX(-50%);
    width: 75%;
	}
	.img {
		position: relative;
		max-width: 30ch;
    align-self: center;
		background-color: white;
		border-radius: 1em;
		padding: 1.5em;
		margin-bottom: 1em;
	}
	img {
		width: 100%;
	}
	img.filter {
    filter: invert(16%) sepia(25%) saturate(7374%) hue-rotate(277deg) brightness(90%) contrast(92%);
	}
	.white, .color {
		color: white;
	}
	.color .btn-primary {
		background: white;
		border-color: white;
		color: #742284;
	}
	h1 {
		text-align: center;
		font-size: 2em;
	}
	.color article {
		background: #742284;
	}
	main {
		position: relative;
		min-height: calc(100dvh - 90px - 72px);
		display: flex;
    justify-content: center;
    align-items: center;
	}

	main > article {
		max-width: 45ch;
		width: 100%;
    border-radius: 1em;
    border: 2px solid;
    margin: auto;
	}
	.item {
		display: flex;
		align-items: end;
		display: flex;
    align-items: end;
		border: 2px solid;
    border-radius: 0.75em;
    padding: 0.75em;
		gap: 0.75em;
		transition: .5s;
	}
	.item:hover {
		scale: 1.02;
	}
	.item a {
		font-weight: normal;
	}
	.info {
		gap: 0.75em;
	}
	.btn-square {
		width: 32px;
    height: 32px;
	}
	@media (max-width: 700px) {
		main {
			min-height: calc(100dvh - 76px - 65px);
		}
		main > article {
			max-width: 100%;
			border: none;
		}
		.color {
			background-color: #742284;
		}
		.color article {
			background: transparent;
		}
		.price {
			padding-bottom: 4px;
		}
		.linea {
			justify-content: space-between;
		}
	}
	@media (max-width: 400px) {
		main {
			min-height: calc(100dvh - 72px - 58px);
		}
	}
</style>