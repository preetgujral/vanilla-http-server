var gulp = require ( 'gulp' );
var jshint = require ( 'gulp-jshint' );
var jscs = require ( 'gulp-jscs' );
var mocha = require ( 'gulp-mocha' );

gulp.task( 'mocha', () => {
  return gulp.src( './test.js' )
    .pipe( mocha() );
    // .pipe(mocha.reporter('default'))
});

gulp.task( 'jshint' , () => {
  return gulp.src( './*.js' )
  .pipe( jshint() )
  .pipe( jshint.reporter() );
});

gulp.task( 'jscs' , () => {
  return gulp.src( './*.js' )
  .pipe( jscs() )
  .pipe( jscs.reporter() );
});

//run default tasks on array of tasks
gulp.task( 'default', ['mocha', 'jshint', 'jscs'] );
