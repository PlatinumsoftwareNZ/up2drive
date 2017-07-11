var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var util = require('gulp-util')
var gulpif = require('gulp-if')
var gulpRevAll = require('gulp-rev-all')
var del = require('del')
var cleanCSS = require('gulp-clean-css')
var gulpCopy = require('gulp-copy')
var runSequence = require('run-sequence');

var config = {
    sourceMaps: !util.env.production
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
  .pipe(gulpif(config.sourceMaps,sourcemaps.init()))
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulpif(config.sourceMaps,sourcemaps.write()))
//     .pipe(gulpRevAll.revision())    
     .pipe(gulp.dest('assets/js'))
     //.pipe(gulpRevAll.manifestFile())
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
    'index.html'
  ])
    .pipe(gulpCopy('dist/src'));
});

gulp.task('deploy', function(callback) {
  runSequence('clean',
              'css',
              'js',
              'dist')
});

gulp.task('watch', ['js','css'], function () {
  gulp.watch('assets/**/*.js', ['js'])
  gulp.watch('assets/**/*.css', ['css'])
})