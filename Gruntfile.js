'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

        watch: {
            scripts: {
                files: ['*.js'],
                tasks: ['jshint']
            },
        },

        jshint: {
            all: [
                '*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        casper: {
            test : {
                options : {
                    test : true,
                    direct : true,
                    'log-level' : 'info'
                },
                src: ['tests/*.spec.js'],
                dest : function(input) {
                    return input.replace(/\.js$/,'.xml');
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-casper');

    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('test', ['jshint', 'casper:test']);
    grunt.registerTask('watch', ['watch']);
};