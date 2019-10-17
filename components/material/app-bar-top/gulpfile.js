const autoprefixer = require('autoprefixer'),
  babel = require('gulp-babel'),
  server = require('browser-sync').create(),
  concat = require('gulp-concat'),
  cssnano = require('cssnano'),
  gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  sass = require('gulp-sass'),
  awspublish = require("gulp-awspublish"),
  path   = require('path'),
  rename = require('gulp-rename'),
  NEW_S3_DIRECTORY = 'components';

// Make a collection of paths used by the various
// build steps
const paths = {
  html: './*.html',
  scripts: ['./js/**/*.js', '!**/dist/*.js'],
  styles: './scss/**/*.scss',
  dist: './js/dist',
  ignore: './js/dist',
};

function styles(done) {
  gulp
  .src(paths.styles)
  .pipe(sass())
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
exports.scripts = scripts

exports.default = gulp.series(build, serve, watch);

gulp.task("publish", function() {
  var publisher = awspublish.create(
    {
      region: "sfo2",
      endpoint: "sfo2.digitaloceanspaces.com",
      params: {
        Bucket: "pearsonux"
      },
      accessKeyId: process.env.S3_KEY,
      secretAccessKey: process.env.S3_SECRET
    }
  );

  const headers = {
    "Cache-Control": "max-age=315360000, no-transform, public"
  };

  return (
    gulp
    .src("./js/dist/*.js")
    .pipe(rename(function(filePath) {
      filePath.dirname = path.join(NEW_S3_DIRECTORY, filePath.dirname);
    }))
    .pipe(awspublish.gzip({ ext: ".gz" }))
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter())
  );
});
