'use strict';

var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');

module.exports = function (config) {
	return function () {
		var task = gulp.
			src(config.src).
			pipe(minifyCss(config.params)).
			pipe(gulp.dest(config.dest));

		if (config.callback) {
			task.pipe(config.callback());
		}
		return task;
	};
};
