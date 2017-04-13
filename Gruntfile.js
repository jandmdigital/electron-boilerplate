module.exports = function(grunt) {

   var config;

   config = {
      js: {
         all: [ 'Gruntfile.js', 'tests/**/*.js', 'src/**/*.js', '!**/node_modules/**/*' ],
      },
      jsx: {
         all: [ 'src/**/*.jsx', '!**/node_modules/**/*' ],
      },
      sass: {
         main: 'src/sass/main.scss',
         all: [ 'src/**/*.scss', '!**/node_modules/**/*' ],
         includePaths: [ 'node_modules/foundation-sites/scss' ],
      },
   };

   grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      eslint: {
         target: [].concat(config.js.all, config.jsx.all),
      },

      sass: {
         options: {
            sourceMap: true,
         },
         dist: {
            options: {
               includePaths: config.sass.includePaths,
            },
            files: {
               'out/css/main.css': config.sass.main,
            },
         },
      },

      copy: {
         js: {
            files: [
               { expand: true, cwd: 'src', src: [ '**/*.js' ], dest: 'out/' },
            ],
         },
         html: {
            files: [
               { expand: true, cwd: 'src', src: [ '**/*.html' ], dest: 'out/' },
            ],
         },
      },

      browserify: {
         jsx: {
            options: {
               transform: [ [ 'babelify', { plugins: [ 'transform-react-jsx' ], presets: [ 'es2015', 'react' ] } ] ],
            },
            src: [ 'src/index.jsx' ],
            dest: 'out/bundle.js',
         },
      },

      watch: {
         sass: {
            files: config.sass.all,
            tasks: [ 'sass' ],
         },
         js: {
            files: config.js.all,
            tasks: [ 'copy:js' ],
         },
         html: {
            files: [ 'src/**/*.html' ],
            tasks: [ 'copy:html' ],
         },
         jsx: {
            files: config.jsx.all,
            tasks: [ 'browserify' ],
         },
      },

   });

   grunt.loadNpmTasks('grunt-eslint');
   grunt.loadNpmTasks('grunt-sass');
   grunt.loadNpmTasks('grunt-browserify');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-copy');

   grunt.registerTask('standards', [ 'eslint' ]);
   grunt.registerTask('build', [ 'sass', 'copy', 'browserify' ]);
   grunt.registerTask('default', [ 'build' ]);

};
