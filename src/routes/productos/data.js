export const categories = [
	{
		id: "belleza",
		name: "Belleza",
		desc: "Para esas personas que quieren verse perfectas en un mundo que nunca será lo suficientemente bueno para ellas. Porque la belleza interior no vende cremas."
	},
	{
		id: "tecnologia",
		name: "Tecnología",
		desc: "Los gadgets que compras hoy para que en seis meses sientas que vives en la prehistoria. No te preocupes, la actualización cuesta solo un riñón."
	},
	{
		id: "salud",
		name: "Salud",
		desc: "Para aquellos que creen que las vitaminas y los suplementos mágicos van a compensar todas esas malas decisiones alimenticias. No olvides que el fin es inevitable."
	}
]

export const products = [
	{
		id: '123',
		name: 'Crema anti-arrugas "Eterna juventud"',
		desc: 'Elimina esas arrugas que te recuerdan que estás más cerca del fin. Solo $99 para que sigas creyendo que la juventud se compra en un tarro.',
		price: 67,
		discount: 50,
		stock: 50,
		categories: [{
			"id": "belleza",
			"name": "Belleza"
		}],
		images: [
			'https://s1.elespanol.com/2023/11/06/como/807679573_237367069_1024x576.jpg',
			'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/a321a2a3-4cd5-4b8c-853c-ade4d6e2a330/Derivates/885d4ee3-4751-4921-a6d5-7f0f0c9638a3.jpg',
			'https://images.cookforyourlife.org/wp-content/uploads/2020/06/Mexican-Crema-shutterstock_577419388.jpg'
		]
	},
	{
		id: "002",
		name: "Teléfono \"Hipernovedoso 3000\"",
		desc: "Con tecnología avanzada para hacerte sentir anticuado en seis meses. Pero oye, al menos tus selfies saldrán mejor que nunca (por ahora).",
		price: 1290,
		discount: 20,
		stock: 20,
		categories: [
			{
				"id": "tecnologia",
				"name": "Tecnología"
			}
		],
		images: [
			'https://static1.squarespace.com/static/64acedcb87ea253648175060/64acef40b7bc467cb3d08ba7/64adcf4cf0400a689ab05407/1693350133397/Aesthetic-Widget-Apps.jpeg?format=1500w',
			'https://zicase.com/wp-content/uploads/2021/12/Spring_Cases_ZiCASE.jpg'
		]
	},
	{
		id: "003",
		name: "Suplemento vitamínico \"Vida infinita\"",
		desc: "La pastilla que promete añadir años a tu vida mientras ignoras el hecho de que una buena dieta y ejercicio son más efectivos. Pero, ¿quién tiene tiempo para eso?",
		price: 45.5,
		discount: 0,
		stock: 100,
		categories: [
			{
				"id": "salud",
				"name": "Salud"
			},
			{
				"id": "belleza",
				"name": "Belleza"
			}
		],
		images: [
			'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/vitamin-b-complex-1296x728-feature.jpg?w=1155&h=1528',
			'https://images.ecestaticos.com/q5tMre8apg53cCwUtoC187p_SdA=/0x0:2121x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fe65%2Fc2f%2F08a%2Fe65c2f08a1e2f5c14f1ffb91fa97f740.jpg'
		]
	}
]