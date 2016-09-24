'use strict';
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    tag: {
      banner: '/*!\n' +
        ' * <%= pkg.name %>\n' +
        ' * <%= pkg.title %>\n' +
        ' * <%= pkg.url %>\n' +
        ' * @author <%= pkg.author %>\n' +
        ' * @version <%= pkg.version %>\n' +
        ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
        ' * <%= grunt.template.today("mm-dd-yy HH:MM:ss") %>\n' +
        ' */\n'        
    },
    
    dir: {
      stage : 'stage',
      prod  : 'prod',
      src   : 'src'
    },

    //deletes contents of directory
    clean: {
        env: [
          "<%= dir.stage %>/**/*.js", 
          "<%= dir.stage %>/**/*.css", 
          "<%= dir.stage %>/**/*.jpg",
          "<%= dir.stage %>/**/*.gif",
          "<%= dir.stage %>/**/*.png",
          "<%= dir.stage %>/**/*.php", 
          "<%= dir.stage %>/**/*.html",
          "<%= dir.prod %>/**/*.js", 
          "<%= dir.prod %>/**/*.css", 
          "<%= dir.prod %>/**/*.jpg",
          "<%= dir.prod %>/**/*.gif",
          "<%= dir.prod %>/**/*.png",
          "<%= dir.prod %>/**/*.php", 
          "<%= dir.prod %>/**/*.html"
        ]
    },

    // //compiles scss to css
    // compass: {
    //  stage: {
    //    options: {    
    //      sourcemap: true,  
    //      sassDir: 'scss',
    //      cssDir: '<%= dir.stage %>/css',
    //      noLineComments: false,
    //      outputStyle: 'nested',
    //      force: true,
    //      bundleExec: false,
    //      httpImagesPath: 'img',
    //      // imagesDir: 'images-stage.workday.com',
    //      fontsDir: 'fonts'
    //      // httpPath: '//s3-us-west-2.amazonaws.com'
    //      // httpFontsPath: '//assets.workday.com/fonts'
    //    }
    //  }       
    // },

    //concatenates multiple files into one
    // concat: {
    //  js: {
    //    options: {
    //      banner: '<%= tag.banner %>',
    //      separator: ';',
    //    },
    //    prod: {
    //      '<%= dir.prod %>/js/global-scripts-head.js': ['node_modules/jquery/dist/jquery.js'],
    //      '<%= dir.prod %>/js/global-scripts-tail.js': ['src/js/main.js', 'src/js/components/**.js']
    //    },
    //    stage: {
    //      '<%= dir.stage %>/js/global-scripts-head.js': ['node_modules/jquery/dist/jquery.js'],
    //      '<%= dir.stage %>/js/global-scripts-tail.js': ['src/js/main.js', 'src/js/components/**.js']
    //    }
    //  }
    // },
    concat: {
      js: {
        options: {
          banner: '<%= banner %>',
          separator: ';',
        },
        files: {          
          '<%= dir.prod %>/js/global-scripts-head.js': ['<%= dir.src %>/js/vendors/modernizr.js','node_modules/jquery/dist/jquery.js'],
          '<%= dir.prod %>/js/global-scripts-tail.js': [
          '<%= dir.src %>/js/main.js',
          '<%= dir.src %>/js/components/*.js'
          ],
          '<%= dir.stage %>/js/global-scripts-head.js': ['<%= dir.src %>/js/vendors/modernizr.js', 'node_modules/jquery/dist/jquery.js'],
          '<%= dir.stage %>/js/global-scripts-tail.js': [         
          '<%= dir.src %>/js/main.js',
          '<%= dir.src %>/js/components/*.js'
          ]
        }
      }
    },
    //compiles scss to css
    
    sass: {  
      prod: {
        options: {
          style: 'compressed',
          lineNumbers: false
        },
        files: [{
          expand: true,
          cwd: 'src/scss',
          src: ['*.scss'],
          dest: '<%= dir.prod %>/css',
          ext: '.css'
        }]
      },
      stage: {
        options: {
          style: 'nested',
          lineNumbers: true
        },
        files: [{
          expand: true,
          cwd: 'src/scss',
          src: ['*.scss'],
          dest: '<%= dir.stage %>/css',
          ext: '.css'
        }]
      }
    },

    uglify: {
      dist: {
        files: {
          '<%= dir.stage %>/js/global-scripts-head.js': ['<%= dir.stage %>/js/global-scripts-head.js'],
          '<%= dir.prod %>/js/global-scripts-head.js': ['<%= dir.prod %>/js/global-scripts-head.js'],
          '<%= dir.stage %>/js/global-scripts-tail.js': ['<%= dir.stage %>/js/global-scripts-tail.js'],
          '<%= dir.prod %>/js/global-scripts-tail.js': ['<%= dir.prod %>/js/global-scripts-tail.js']
        }
      }
    },    
    //makes production html files from templates and includes
    includes: {
      prod: {
        cwd: 'page_templates',
        src: ['*.php', '*.html'],
        dest: '<%= dir.prod %>/',
        options: {
          includePath: 'includes'
        }
      },
      stage: {
        cwd: 'page_templates',
        src: ['*.php', '*.html'],
        dest: '<%= dir.stage %>/',
        options: {
          includePath: 'includes'
        }
      }
    },
    copy: {
      prod: {
        expand: true,
          cwd: 'src/img',
          src: ['**'],
        dest: '<%= dir.prod %>/img'
      },
      stage: {
        expand: true,
          cwd: 'src/img',
          src: ['**'],
        dest: '<%= dir.stage %>/img'
      }
    },
    //watches files and runs tasks when files are saved
    watch: {
      html: {
        files: ['page_templates/**', 'includes/**'],
        tasks: ['includes']
      },
      sass: {
        files: ['src/scss/**/*.scss'],
        tasks: ['scsslint', 'sass', 'copy']
      },
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['clean', 'concat:js', 'copy']
      },      
      copy: {
        files: ['src/img/**'],
        tasks: ['copy']
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
              'src/scss/**/*.scss',
              'includes/**',
              'src/js/**/*.js',
              'page_templates/**'
          ]
        },
        options: {
          watchTask: true,
          proxy: "localhost/xsracing/<%= dir.stage %>"
        }
      }
    },
    scsslint: {
      options: {
        bundleExec: false,
        colorizeOutput: true,
        config: '.scss-lint.yml',
          // maxBuffer: 1024 * 1024,
        force: true
      },
      src: [
        'src/scss/**/*.scss'
      ]
    },
  });
  
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-browser-sync');

  //tasks
  grunt.registerTask('build', ['clean', 'copy', 'includes', 'scsslint', 'sass', 'concat', 'uglify']);
  grunt.registerTask('default', ['browserSync', 'watch']);
};
