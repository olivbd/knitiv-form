module.exports = function(gulp, plugins) {
  return function() {
    return plugins.browserify({
      entries: './src/knitiv-form-complete.js',
      debug: false,
      standalone: 'knitiv-form',
      insertGlobalVars: {
        SignaturePad: function() {
          return 'require("signature_pad")';
        }
      },
      ignoreMissing: true
    })
      .bundle()
      .pipe(plugins.source('knitiv-form-complete.js'))
      .pipe(plugins.wrap(plugins.template, {version: plugins.packageJson.version}))
      .pipe(plugins.derequire())
      .pipe(gulp.dest('dist/'))
      .pipe(plugins.rename('knitiv-form-complete.min.js'))
      .pipe(plugins.streamify(plugins.uglify({output: {comments: '/^!/'}})))
      .pipe(gulp.dest('dist/'));
  };
};
