const autoprefixer = require('autoprefixer'),
  babel = require('gulp-babel'),
  server = require('browser-sync').create(),
  concat = require('gulp-concat'),
  cssnano = require('cssnano'),
  gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  sass = require('gulp-sass');

// Make a collection of paths used by the various
// build steps
const paths = {
  html: './*.html',
  scripts: ['./node_modules/@material/top-app-bar/dist/mdc.topAppBar.js', './js/index.js'],
  styles: './scss/**/*.scss',
  dist: './js/dist',
  ignore: './js/dist',
};

function styles(done) {
  gulp
  .src(paths.styles)
  .pipe(sass({includePaths: ["node_modules"] }))
  .on('error', sass.logError)
  .pipe(postcss([autoprefixer({ cascade: false }), cssnano()]))
  .pipe(concat('style.css'))
  .pipe(gulp.dest('./css'))
  .pipe(server.stream());
  done();
}

function scripts(done) {
  gulp
  .src(paths.scripts)
  .pipe(
    babel({
      presets: [['env', { modules: false }]]
    })
  )
  .pipe(concat('index.js'))
  .pipe(gulp.dest(paths.dist));
  done();
}

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './'
    },
    notify: false
  });
  done();
}

function watch() {
  const opts = { ignored: paths.ignore };

  gulp.watch(paths.styles, styles);
  gulp.watch(paths.scripts, opts, gulp.series(scripts, reload));
  gulp.watch(paths.html, reload);
}

const build = gulp.series(styles, scripts);

exports.build = build;
exports.serve = serve;
exports.watch = watch;
exports.scripts = scripts;

exports.default = gulp.series(build, serve, watch);

