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
var config = {
    sourceMaps: !util.env.production
};


gulp.task('js', function () {
  
  del(['dist/src/*.*']);

  gulp.src(['app/main.js','app/**/*.js'])
  .pipe(gulpif(config.sourceMaps,sourcemaps.init()))
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulpif(config.sourceMaps,sourcemaps.write()))
//     .pipe(gulpRevAll.revision())    
     .pipe(gulp.dest('dist/src'))
     //.pipe(gulpRevAll.manifestFile())
     .pipe(gulp.dest('dist/src')); 

  gulp.src(['assets/css/*.*'])
    .pipe(concat('app.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/src'))
    
})


gulp.task('watch', ['js'], function () {
  gulp.watch('src/**/*.js', ['js'])
})