'use strict';

module.exports = function(grunt) {

   var config;

   config = {
      js: {
         all: [ 'Gruntfile.js', 'tests/**/*.js', 'src/**/*.js', '!**/node_modules/**/*' ],
      },
   };

   grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      eslint: {
         target: config.js.all,
      },

      sass: {
         options: {
            sourceMap: true,
         },
         dist: {
            options: {
               includePaths: [ 'node_modules/foundation-sites/scss' ],
            },
            files: {
               'dist/css/main.css': 'src/sass/main.scss',
            },
         },
      },

      copy: {
         scripts: {
            files: [
               { expand: true, cwd: 'src', src: [ '**/*.js' ], dest: 'dist/' },
            ],
         },
         html: {
            files: [
               { expand: true, cwd: 'src', src: [ '**/*.html' ], dest: 'dist/' },
            ],
         },
      },

      watch: {
         scripts: {
            files: config.js.all,
            tasks: [ 'copy:scripts' ],
         },

         html: {
            files: [ 'src/**/*.html' ],
            tasks: [ 'copy:html' ],
         },

         sass: {
            files: 'src/sass/**/*.scss',
            tasks: [ 'sass' ],
         },
      },

   });

   grunt.loadNpmTasks('grunt-eslint');
   grunt.loadNpmTasks('grunt-sass');
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('standards', [ 'eslint' ]);
   grunt.registerTask('default', [ 'standards', 'sass', 'copy' ]);

};
