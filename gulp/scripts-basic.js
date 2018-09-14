module.exports = function(gulp, plugins, bundle) {
  return function() {
    bundle = bundle || plugins.browserify({
      entries: './src/knitiv-form.js',
      debug: false,
      standalone: 'knitiv-form',
      ignoreMissing: true
    });

    return bundle
      .bundle()
      .pipe(plugins.source('knitiv-form.js'))
      .pipe(plugins.wrap(plugins.template, {version: plugins.packageJson.version}))
      .pipe(plugins.derequire())
      .pipe(gulp.dest('dist/'))
      .pipe(plugins.rename('knitiv-form.min.js'))
      .pipe(plugins.streamify(plugins.uglify({output: {comments: '/^!/'}})))
      .pipe(gulp.dest('dist/'))
      .on('error', function(err) {
        // eslint-disable-next-line no-console
        console.log(err);
        this.emit('end');
      });
  };
};
