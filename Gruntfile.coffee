module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    uglify:
      options:
        banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      build:
        src: 'js/jquery.dialogextend.js',
        dest: 'js/jquery.dialogextend.min.js'
    coffee:
      compile:
        files:
          'js/jquery.dialogextend.js':['dialogextend/jquery.dialogextend.coffee','dialogextend/src/modules/*.coffee']
  
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.registerTask 'default', ['coffee','uglify']