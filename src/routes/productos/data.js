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
	},
	{
		id: "moda",
		name: "Moda",
		desc: "Ropa que te hará lucir fabuloso, aunque lo que lleves debajo sea un desastre. Porque la primera impresión lo es todo."
	},
	{
		id: "cocina",
		name: "Cocina",
		desc: "Utensilios y gadgets que prometen hacerte un chef, aunque solo sepas preparar cereal. ¡Sorprende a tus amigos con un platillo de Instagram!"
	}
];

export const products = [
	{
		id: '123',
		name: 'Crema anti-arrugas Eterna juventud',
		desc: 'Elimina esas arrugas que te recuerdan que estás más cerca del fin. Solo $99 para que sigas creyendo que la juventud se compra en un tarro.',
		price: 67,
		discount: 50,
		stock: 50,
		categories: [{ id: "belleza", name: "Belleza" }],
		images: [
			'https://s1.elespanol.com/2023/11/06/como/807679573_237367069_1024x576.jpg',
			'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/a321a2a3-4cd5-4b8c-853c-ade4d6e2a330/Derivates/885d4ee3-4751-4921-a6d5-7f0f0c9638a3.jpg',
			'https://images.cookforyourlife.org/wp-content/uploads/2020/06/Mexican-Crema-shutterstock_577419388.jpg'
		]
	},
	{
		id: "002",
		name: "Teléfono Hipernovedoso 3000",
		desc: "Con tecnología avanzada para hacerte sentir anticuado en seis meses. Pero oye, al menos tus selfies saldrán mejor que nunca (por ahora).",
		price: 1290,
		discount: 20,
		stock: 20,
		categories: [{ id: "tecnologia", name: "Tecnología" }],
		images: [
			'https://static1.squarespace.com/static/64acedcb87ea253648175060/64acef40b7bc467cb3d08ba7/64adcf4cf0400a689ab05407/1693350133397/Aesthetic-Widget-Apps.jpeg?format=1500w',
			'https://zicase.com/wp-content/uploads/2021/12/Spring_Cases_ZiCASE.jpg'
		]
	},
	{
		id: "003",
		name: "Suplemento vitamínico Vida infinita",
		desc: "La pastilla que promete añadir años a tu vida mientras ignoras el hecho de que una buena dieta y ejercicio son más efectivos. Pero, ¿quién tiene tiempo para eso?",
		price: 45.5,
		discount: 0,
		stock: 100,
		categories: [
			{ id: "salud", name: "Salud" }
		],
		images: [
			'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/vitamin-b-complex-1296x728-feature.jpg?w=1155&h=1528',
			'https://images.ecestaticos.com/q5tMre8apg53cCwUtoC187p_SdA=/0x0:2121x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fe65%2Fc2f%2F08a%2Fe65c2f08a1e2f5c14f1ffb91fa97f740.jpg'
		]
	},
	{
		id: "004",
		name: "Reloj inteligente Vigilante del tiempo",
		desc: "Tu nuevo compañero que te dirá cuánto tiempo pasas en redes sociales. No te preocupes, también cuenta pasos... ¡para que te sientas mejor!",
		price: 199,
		discount: 10,
		stock: 75,
		categories: [{ id: "tecnologia", name: "Tecnología" }],
		images: [
			'https://http2.mlstatic.com/D_NQ_NP_637510-MLB51804344023_102022-O.webp',
			'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/121438381_01/w=800,h=800,fit=pad'
		]
	},
	{
		id: "005",
		name: "Sarten antiadherente Cocinero profesional",
		desc: "La herramienta perfecta para que hasta el más torpe de los chefs pueda crear algo comestible. Recuerda, todo sabe mejor con una buena presentación.",
		price: 39.99,
		discount: 15,
		stock: 150,
		categories: [{ id: "cocina", name: "Cocina" }],
		images: [
			'https://promart.vteximg.com.br/arquivos/ids/7926430-1000-1000/137457.jpg?v=638484411473730000'
		]
	},
	{
		id: "006",
		name: "Vestido de gala Deslumbrante",
		desc: "Para esas ocasiones especiales en las que quieres ser el centro de atención. Solo asegúrate de que tu outfit no le robe el protagonismo al evento.",
		price: 150,
		discount: 25,
		stock: 30,
		categories: [{ id: "moda", name: "Moda" }, { id: "belleza", name: "Belleza" }],
		images: [
			'https://www.bellayvale.pe/wp-content/uploads/2023/07/PSX_20230727_223512.jpg',
			'https://www.bellayvale.pe/wp-content/uploads/2022/06/Vestido-elegante-de-tul-manga-larga-rosa-1.jpg'
		]
	}
];
