<script lang="ts">
	import { fly } from "svelte/transition";
	import { cart, datos } from "$lib/stores";

	import Cart from "$lib/compo/Cart.svelte";
	import Footer from "$lib/compo/Footer.svelte";
	import Header from "$lib/compo/Header.svelte";
	import qr from "$lib/images/qr.avif"
    import { goto } from "$app/navigation";

	let show_cart = false
	let step = 1
	let showToast = false
	let src: any = null

	function copyNumber() {
		navigator.clipboard.writeText('940185837').then(() => {
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

	function handleDrop(event: any) {
		event.preventDefault();
		const file = event.dataTransfer.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				src = reader.result;
			};
			reader.readAsDataURL(file);
		}
	}

	function handleDragOver(event: Event) {
		event.preventDefault(); // Necesario para permitir el drop
	}

	function finalizar() {
		cart.clearCart()
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
		<ul class="steps">
			<li class="step" class:step-primary={step > 0}>Productos</li>
			<li class="step" class:step-primary={step > 1}>Datos de envío</li>
			<li class="step" class:step-primary={step > 2}>Pago</li>
			<li class="step" class:step-primary={step > 3}>Subir Captura</li>
		</ul>
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
			<div class="fcol g2">
				<p class="fb between"><strong>Subtotal:</strong>S/&nbsp;{($cart.subtotal).toFixed(2)}</p>
				<p class="fb between"><strong>Envío:</strong>S/&nbsp;{($datos.envio).toFixed(2)}</p>
				<p class="fb between"><strong>Total:</strong><strong>S/&nbsp;{($datos.envio + $cart.subtotal).toFixed(2)}</strong></p>
			</div>
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
			<p class="center">{src ? 'Puedes hacer click en la imagen para cambiarla' : 'Sube tu captura aquí abajo.'}</p>
			<label for="upload"
					on:drop={handleDrop}
					on:dragover={handleDragOver}
					style="border: 2px dashed #d7d7d7; padding: 20px; display: block; text-align: center;">
					{#if src}
							<img {src} alt="Captura" style="max-width: 100%;">
					{:else}
							<svg class="nube" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#d7d7d7">
									<path d="m444-462-52 52q-12 11-26.6 10.5-14.6-.5-24.57-11.67Q330-421 330-436.5q0-15.5 11-26.5l114-115q9.82-10 24.73-10T506-578l115 115q11 11 11 26t-10.7 25.7Q610-400 595.2-400T569-411l-52-51v244h236.52q45.48 0 77.98-32.71Q864-283.42 864-328q0-44.67-32.69-77.44-32.68-32.77-77.23-32.77h-64.35v-83.37q0-90-61.1-154.71Q567.52-741 477.64-741q-89.88 0-151.11 64.67-61.24 64.67-61.24 154.59h-19.04q-62.93 0-106.59 43.13Q96-435.48 96-370q0 63 44.39 107.5Q184.79-218 249-218h98q15.2 0 26.1 10.68 10.9 10.67 10.9 25.81 0 15.14-10.9 25.83Q362.2-145 347-145h-98q-93 0-159.5-65.73Q23-276.45 23-369q0-80.71 50.5-143.85Q124-576 204-591q24-99 101.55-161T482-814q116 0 195.5 82T763-534v24q74 3 124 54t50 128q0 74.83-54.08 128.92Q828.83-145 754-145H517q-29.36 0-51.18-22.14Q444-189.27 444-218v-244Zm36 18Z"/>
							</svg>
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
		width: 75%;
		height: 75%;
	}
	.copy {
		align-self: center;
		font-size: 1.25em;
	}
	.center, label[for="upload"]{
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
	.color .steps .step:before, .color .steps .step:after {
		color: #742284;
	}
	.color .steps .step-primary+.step-primary:before, .color .steps .step-primary:after {
		background-color: #0dcbb4;
		color: white;
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