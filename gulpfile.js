var gulp = require('gulp');
var imagemin= require('gulp-imagemin-fix');
var sass= require('gulp-sass');
const minify = require('gulp-minify');
var autoprefixer = require('autoprefixer');
var rseqeuence=require('run-sequence');
var fsequence=require('run-sequence');
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
gulp.task('autoprefixer', function(){
    return gulp.src('./dist/css/*.css')
      .pipe(sourcemaps.init())
      .pipe(postcss([ autoprefixer() ]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./dist/css/'))
});
// to convert scss to css
gulp.task('scssCompiler',function(){
    return gulp.src("src/sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css/"))
});
// watch
gulp.task('watch', function(){
    gulp.watch('./src/sass/*.scss');
});
// dev-build
gulp.task('dev-build',function(cb){
    rseqeuence(['watch', 'scssCompiler'], cb);

});
//production
gulp.task('prod', function(cb){
    fsequence(['scssCompiler', 'imageMIN', 'compress', 'autoprefixer'], cb);
});