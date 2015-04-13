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
		sass: {
			dist: {
				files: {
					'dist/main.css': 'scss/main.scss'
				}
			}
		},
		watch: {
				files: ['js/**/*.js', 'scss/*'],
				tasks: ['concat', 'sass']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-bower-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['concat', 'bower_concat', 'sass']);
};
