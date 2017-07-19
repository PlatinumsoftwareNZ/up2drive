var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var util = require('gulp-util')
var gulpif = require('gulp-if')
var del = require('del')
var cleanCSS = require('gulp-clean-css')
var gulpCopy = require('gulp-copy')
var runSequence = require('run-sequence');
var cacheBuster = require('gulp-cache-bust');
var rename = require('gulp-rename');

var config = {
    sourceMaps: !util.env.production,
    production: util.env.production,
    envFileName: function() {
      if (util.env.production) {
        return 'env.production.js'
      }
      else {
        return 'env.js'
      }
    }
};

gulp.task('clean', function() {
    return del(['dist/*']);
});

gulp.task('js', function () {
  return gulp.src([
  'node_modules/angular/angular.min.js',
  'node_modules/angular-animate/angular-animate.min.js',
  'node_modules/moment/min/moment.min.js',
  'node_modules/angular-momentjs/angular-momentjs.min.js',
  'node_modules/angular-google-places-autocomplete/dist/autocomplete.min.js',
  'node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
   'app/main.js',
   'app/**/*.js'])
      .pipe(concat('app.js'))
    .pipe(gulpif(config.production,ngAnnotate()))
    .pipe(gulpif(config.production,uglify()))
       .pipe(gulp.dest('assets/js'))
})

gulp.task('css', function() {
  
  return gulp.src([
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/angular-google-places-autocomplete/dist/autocomplete.min.css',
    'assets/css/*.*'
    ])
    .pipe(concat('app.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('assets/css'));
});

  
gulp.task('dist', function() {

  return gulp.src([
    'app/*.html',
    'assets/css/app.css',
    'assets/js/app.js',
    'assets/img/*.*',
    'index.html',
    config.envFileName()
  ])
    .pipe(gulpCopy('dist/src'));
});

gulp.task('env', function() {

  return gulp.src([
    config.envFileName()
  ])
    .pipe(rename('env.js'))
    .pipe(gulp.dest('dist/src'));
});

// cacheBuster looks at the css and js files and appends a hash to the
// request to cause the file to get reloaded when the file changes.
gulp.task('cacheBust', function () {
    return gulp.src('dist/src/index.html')
        .pipe(cacheBuster())
        .pipe(gulp.dest('dist/src'));
});

gulp.task('deploy', function(callback) {
  runSequence('clean',
              ['css','js'],
              'dist',
              ['env','cacheBust'])
});

gulp.task('watch', ['js','css'], function () {
  gulp.watch('app/*.js', ['js'])
  gulp.watch('assets/css/*.css', ['css'])
})