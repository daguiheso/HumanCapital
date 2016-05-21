var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

var paths = {
  	//scripts: ['client/js/**/*.coffee', '!client/external/**/*.coffee'],
  	scss: './src/**/*'
};

gulp.task('styles', function () {
	gulp
		.src('./src/index.scss')
		.pipe(sass())
		.pipe(rename('index.css'))
		.pipe(gulp.dest('./css'))
})

gulp.task('watch', function() {
  	//gulp.watch(paths.scripts, ['scripts']);
  	gulp
  		.watch(paths.scss, ['styles']);
});

gulp.task('default', ['watch','styles'])