window.App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.FIXTURES = [
	{
		id: 1,
		shortName: 'ACAL',
		name: 'Calcul avan√at'
	},
	{
		id: 2,
		shortName: 'ALED',
		name: 'Algebra lineal i equacions diferencials'
	},
	{
		id: 3,
		shortName: 'EM',
		name: 'Electromagnetisme'
	},
	{
		id: 4,
		shortName: 'FF',
		name: 'Fonaments de f√sica'
	}
];
