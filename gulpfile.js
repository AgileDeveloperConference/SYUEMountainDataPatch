
var jshint = require('gulp-jshint'),
	gulp = require('gulp'),
	mocha = require('gulp-mocha');


var testFiles = 'test/*.js';

gulp.task('lint',function(){
	return gulp.src('./src/*.js')
			.pipe(jshint())
			.pipe(jshint.reporter());
});

gulp.task('test', function () {
    return gulp.src(testFiles, {read: false})
           .pipe(mocha({reporter: 'nyan'}));
});
