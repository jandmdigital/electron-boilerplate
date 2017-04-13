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
               'src/css/main.css': 'src/sass/main.scss',
            },
         },
      },

      watch: {
         sass: {
            files: 'src/sass/**/*.scss',
            tasks: [ 'sass' ],
         },
      },

   });

   grunt.loadNpmTasks('grunt-eslint');
   grunt.loadNpmTasks('grunt-sass');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('standards', [ 'eslint' ]);
   grunt.registerTask('default', [ 'standards', 'sass' ]);

};
