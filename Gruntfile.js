module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: ['js/*.js', 'js/**/*.js'],
				dest: 'dist/stool.js'
			}
		},
		bower_concat: {
			options: {
				separator: ';',
			},
			all: {
				dest: 'dist/libs.js',
				cssDest: 'dist/libs.css'
			}
		},
		watch: {
				files: ['js/**/*.js'],
				tasks: ['concat']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-bower-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'bower_concat']);
	grunt.registerTask('watch-files', ['concat']);
};
