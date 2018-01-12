var gulp    = require('gulp');
var md2json = require('gulp-markdown-table-to-json');

gulp.task('build', function () {
  gulp.src('README.md')
    .pipe(md2json("###### "))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['build'], function() {});
