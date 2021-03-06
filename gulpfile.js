var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect'),
    uncss = require('gulp-uncss'),
    notify = require('gulp-notify');
//    
//gulp-connect
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

//css
gulp.task('css', function () {
	return gulp.src('./css/css.css')
    		.pipe(autoprefixer('last 3 versions'))
    		.pipe(uncss({
    			html: ['app/index.html']
    		}))
    		.pipe(cleanCSS())
    		.pipe(rename('css.min.css'))
    		.pipe(gulp.dest('app/css'))
    		.pipe(connect.reload())
    		.pipe(notify('Done'));
});
//css
gulp.task('cssHandheld', function () {
    return gulp.src('./css/handheld.css')
            .pipe(autoprefixer('last 3 versions'))
            .pipe(uncss({
                html: ['app/index.html']
            }))
            .pipe(cleanCSS())
            .pipe(rename('handheld.min.css'))
            .pipe(gulp.dest('app/css'))
            .pipe(connect.reload())
            .pipe(notify('Done'));
});
//html
gulp.task('html' , function () {
	return gulp.src('./index.html')
		  .pipe(rename('index.html'))
		  .pipe(gulp.dest('app/'))
		  .pipe(connect.reload())
          .pipe(notify('Done'));
});

//js
gulp.task('js' , function () {
	return gulp.src('./app/js/*.js')
		  .pipe(connect.reload())
          .pipe(notify('Done'));
});

//watch
gulp.task('watch', function () {
	gulp.watch(['./css/css.css'], ['css']);
	gulp.watch(['./*.html'], ['html']);
    gulp.watch(['./js/*.js'], ['js']);
    gulp.watch(['./css/handheld.css'], ['cssHandheld']);
});

//default
gulp.task('default', ['connect', 'watch']);