<script lang="ts">
	import mapboxgl from "mapbox-gl"
	import type { LngLatLike } from "mapbox-gl"
	import { features } from './geojson.js'
	import { datos } from "$lib/stores";
	import { polygon } from "@turf/helpers"
	import { booleanPointInPolygon } from "@turf/boolean-point-in-polygon"
	import { onMount, tick } from "svelte"
	import { days_dict } from "$lib/utils.js"

	import Cart from "$lib/compo/Cart.svelte";
	import Footer from "$lib/compo/Footer.svelte";
	import Header from "$lib/compo/Header.svelte";
	import { goto } from "$app/navigation";

	let show_cart = true
	let zone_days: string[] = []
	let prev_id: number | undefined
	let troste: any
	
	type Zone = {
		days: string[],
		prices: number[],
		id: number | undefined
	}
	let zone: Zone = {
		id: undefined,
		days: [],
		prices: []
	}

	function obtenerPropiedadDeZona(punto: any) {
		for (const zona of features.features) {
			const turfPoly = polygon(zona.geometry.coordinates)
			if (booleanPointInPolygon(punto, turfPoly)) {	
				return {
					id: zona.id,
					days: zona.properties.days,
					prices: zona.properties.price
				}
			}
		}
		return {
			id: undefined,
			days: [],
			prices: []
		};
	}

	onMount(() => {
		const initCoords = ($datos.coords.length ? $datos.coords : [-71.536973, -16.398822]) as LngLatLike
		let map = new mapboxgl.Map({
			container: 'map',
			center: initCoords,
			zoom: 12,
			accessToken: 'pk.eyJ1IjoiYWxhbi0yNSIsImEiOiJjbGViaGI4aDkwcHpxM25udTAwaWcyczFrIn0.MZhpce5K1n4Gi7xBVGFj6Q'
		})

		let marker = new mapboxgl.Marker()
			.setLngLat(initCoords)
			.addTo(map)

		map.addControl(
			new mapboxgl.GeolocateControl({
				positionOptions: {
					enableHighAccuracy: true
				},
				trackUserLocation: true,
				showUserHeading: false
			})
		)

		map.on('load', () => {
			map.addSource('my-geojson-source', {
				'type': 'geojson',
				'data': features as any
			})
			map.addLayer({
        'id': 'my-geojson-layer',
        'type': 'fill',
        'source': 'my-geojson-source',
        'layout': {},
        'paint': {
            'fill-color': ['get', 'fill'],
            'fill-opacity': ['get', 'fill-opacity']
        }
    	})
			map.addLayer({
					'id': 'my-geojson-outline',
					'type': 'line',
					'source': 'my-geojson-source',
					'layout': {},
					'paint': {
							'line-color': ['get', 'stroke'],
							'line-width': ['get', 'stroke-width']
					}
			})
		})

		map.on('move', (e) => {
			marker.setLngLat(map.getCenter())
		});

		map.on('moveend', (e) => {
			zone = obtenerPropiedadDeZona(map.getCenter().toArray())
			$datos.coords = map.getCenter().toArray()

			zone_days = zone.days

			// Si mueve el marcador a la misma zona
			if (zone.id === prev_id) {
				return;
			};

			prev_id = zone.id

			// Si mueve el marcador a otra zona válida
			if (zone_days.length > 0) {
				$datos.valid_location = true
				const dayElement = document.querySelector('#day') as HTMLInputElement
				troste = 0
				$datos.envio = zone.prices[0]
				$datos.day = days_dict[0]
			} else {
			// Si mueve el marcador a una zona inválida
				$datos.day = 'Invalid'
				$datos.envio = 0
				$datos.valid_location = false
			}
		})

		zone = obtenerPropiedadDeZona(map.getCenter().toArray())
		prev_id = zone.id
		$datos.coords = map.getCenter().toArray()
		zone_days = zone.days
	})

	function help() {
		const dayElement = document.querySelector('#day') as HTMLInputElement
		$datos.envio = zone.prices[parseInt(dayElement.value)]
		$datos.day = days_dict[parseInt(dayElement.value)]
	}

	function checkout() {
		goto('/comprar')
	}

</script>

<svelte:head>
	<title>Mapa | Join Shop</title>
</svelte:head>

<Header bind:show_cart={show_cart}/>
<main>
	<article class="p4 fcol g4">
		<h1>Seleccione su ubicación</h1>
		<strong class="center">Desplácese por el mapa y centre el marcador en la ubicación donde desea que se le entregue el producto.</strong>
		<div id="map"></div>
		{#if zone_days.length}
			<section class="fc between">
				<strong>Día de envío:</strong>
				<select name="day" id="day" bind:value={troste} on:change={help}>
					{#each zone_days as _, index}
						<option value={index}>{days_dict[index]}</option>
					{/each}
				</select>
			</section>
			<section class="fc between">
				<strong>Costo de envío:</strong>
				<p>S/&nbsp;{$datos.envio.toFixed(2)}</p>
			</section>
		{:else}
			<p>De momento no podemos enviar pedidos en esta zona. Puede escoger
				otra o comunicarse con nosotros mediante <a href="/">WhatsApp</a>.</p>
		{/if}
		<button class="btn" type="button" disabled={zone_days.length == 0} on:click={checkout}>Continuar</button>
	</article>
	<Cart bind:show_cart={show_cart}/>
</main>
<Footer/>

<style>
	h1 {
		font-size: 2em;
	}
	h1, .center {
		text-align: center;
	}
	main {
		position: relative;
		min-height: calc(100dvh - 90px - 72px);
	}
	article {
		max-width: 55ch;
    margin: auto;
	}
	.btn {
		padding: 0.25em 1em;
	}
	#map {
		height: 400px;
		background: #eee;
		border-radius: 1em;
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