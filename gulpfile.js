'use strict';

const gulp   = require('gulp'),
	  concat = require('gulp-concat'),
	  rename = require('gulp-rename'),
	  uglify = require('gulp-uglify'),
	  jshint = require('gulp-jshint'),
	  fs 	 = require('fs'),
	  del    = require('del');

const scripts = JSON.parse( fs.readFileSync('modules.json', 'utf8') )['scripts'].map(( script, index ) => {
	return 'src/' + script;
});


gulp.task('default', () => {
	gulp.start( ['clean', 'scripts'] );
});


gulp.task('clean', () => {
	del( ['dist/*', '!dist/*.git*'] ).then(( paths ) => {
		paths.length && console.log('Deleted files and folders:\n', paths.join('\n'));
	});
});


gulp.task('watch', function () {
    return gulp.watch(scripts, ['scripts']);
});


gulp.task('scripts', () => {
	return gulp.src( scripts )
		.pipe( jshint() )
		.pipe( jshint.reporter('default') )
		.pipe( jshint.reporter('fail') )
		.pipe( concat('forumotion.js') )
		.pipe( gulp.dest('dist/js/') )
		// .pipe( uglify() )
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe( gulp.dest('dist/js/') );
});