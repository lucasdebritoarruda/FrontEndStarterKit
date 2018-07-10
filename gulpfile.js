var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


gulp.task('serve', function(){

	browserSync.init({
		server: './'
	});

	gulp.watch('./assets/sass/*', ['sass']);
	gulp.watch('./assets/views/*', ['pug']).on('change', reload);
});

gulp.task('sass', function(){
	return gulp.src('./assets/sass/*.scss')
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(gulp.dest('./public/css'))
	.pipe(browserSync.stream());
});

gulp.task('pug', function(){
	return gulp.src('./assets/views/*.pug')
	.pipe(pug())
	.pipe(gulp.dest('./'))
	.pipe(browserSync.stream());
});

gulp.task('default',['serve']);
