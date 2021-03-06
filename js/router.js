App.Router.map(function() {
		this.resource('application', { path: '/'}, function() {
			this.route('news', 		  {path: '/news'});
			this.resource('subjects', {path: '/subjects'}, function() {
				this.resource('subject', {path: '/:subject_id'}, function() {
					this.route('info', 		 {path: '/info'});	
					this.route('professors', {path: '/professors'});	
					this.route('exams', 	 {path: '/exams'});	
					this.route('resources',  {path: '/resources'});	
					this.route('reviews', 	 {path: '/reviews'});	
				});
			});
			this.route('profile', {path: '/profile'});
			this.resource('professors', {path: '/professors'}, function() {
				this.route('professor', {path: '/:professor_id'});
			});
		});
});

App.Router.reopen({
		rootURL: '/stool/'
});

App.ApplicationRoute = Ember.Route.extend({
		model: function() {
				return App.FIXTURES;
		}
});

App.SubjectsRoute = Ember.Route.extend({
		model: function() {
				return App.FIXTURES;
		}
})

App.SubjectRoute = Ember.Route.extend({
		model: function(params) {
				return App.FIXTURES[params.subject_id-1];
		}
});

App.SubjectProfessorsRoute = Ember.Route.extend({
		model: function(params) {
				return this.modelFor('subject').professors.map(function(id) {
					return App.Professors[id];
				});
		}
});

App.ProfessorRoute = Ember.Route.extend({
		model: function(params) {
				console.log("hafsdoh");
				return App.Professors[params.professor_id-1];
		}
});
