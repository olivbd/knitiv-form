module.exports = function(gulp, plugins) {
  return function() {
    return gulp.src('./css/knitiv-form.css')
      .pipe(gulp.dest('dist'))
      .pipe(plugins.cssnano({zindex: false}))
      .pipe(plugins.rename('knitiv-form.min.css'))
      .pipe(gulp.dest('dist'));
  };
};
