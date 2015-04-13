window.App = Ember.Application.create({
	LOG_TRANSITIONS: true
});


App.FIXTURES = [
	{
		id: 1,
		shortName: 'ACAL',
		name: 'Càlcul avançat',
		professors: []
	},
	{
		id: 2,
		shortName: 'ALED',
		name: 'Àlgebra lineal i equacions diferencials',
		professors: [1, 2, 3]
	},
	{
		id: 3,
		shortName: 'EM',
		name: 'Electromagnetisme',
		professors: []
	},
	{
		id: 4,
		shortName: 'FF',
		name: 'Fonaments de física',
		professors: []
	}
];

App.Professors = [
	{
		id: 1,
		name: 'Muñoz López, Francesc Xavier'
	},
	{
		id: 2,
		name: 'Martí Farré, Jaume'
	},
	{
		id: 3,
		name: 'Fàbrega Canudas, Josep'
	},
	{
		id: 4,
		name: 'Monreal Arnal, Teresa'
	}
];
