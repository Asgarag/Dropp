var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function () {
    return gulp.src('css/style.less')
        .pipe(less())
        .pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
        .pipe(gulp.dest('css'))
});
