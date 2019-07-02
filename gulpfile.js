var gulp = require('gulp');
var imagemin= require('gulp-imagemin-fix');
var sass= require('gulp-sass');
const minify = require('gulp-minify');
// to copy HTML files
// gulp.task('copyHTML', function(){
//     return  gulp.src("src/")
//     .pipe(gulp.dest('../../../SurveySparrow-Tasks/Task Manager/dist/'));
// });
// to optimize images
gulp.task('imageMIN',function(){
    return gulp.src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images/'))
});
// to minify
gulp.task('compress', function() {
  gulp.src(['dist/js/*.js', 'lib/*.mjs'])
    .pipe(minify())
    .pipe(gulp.dest('dist/js'))
});
// to convert scss to css
gulp.task('scssCompiler',function(){
    return gulp.src("src/sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css/"))
    // .pipe(browserSync.stream());
    // .pipe(liveReload());
});