var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var watch = require('gulp-watch');
var prefixer = require('gulp-autoprefixer');
var uglifycss = require('gulp-uglifycss');
var browsersync = require('browser-sync');


gulp.task('sass',function(){
  return  gulp.src('assets/css/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss())
    .pipe(prefixer())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('watch-sass',['sass'], browsersync.reload);

gulp.task('jade',function(){

return gulp.src('assets/jade/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./'));

});

gulp.task('watch-sass',['sass'], browsersync.reload);
gulp.task('watch-jade',['jade'], browsersync.reload);

gulp.task('watch',function(){

  browsersync({
    server:{
      baseDir: './'
    }
  })

  return gulp.watch('assets/css/**/*.sass',['watch-sass']),
        gulp.watch('assets/jade/**/*.jade',['watch-jade']),
        gulp.watch('assets/js/**/*.js',['watch-jade']);


});
