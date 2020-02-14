const concat = require('gulp-concat'),
  gulp = require('gulp'),
  minify = require('gulp-minify'),
  awspublish = require("gulp-awspublish"),
  path   = require('path'),
  rename = require('gulp-rename'),
  NEW_S3_DIRECTORY = 'components';
require('dotenv').config();

// Make a collection of paths used by the various
// build steps
const paths = {
  dist: './build/',
};


function scripts(done) {
  gulp
    .src([
      './top-app-bar/js/dist/index.js',
    ])
    .pipe(concat('web-components.js'))
    .pipe(minify())
    .pipe(gulp.dest(paths.dist));
  done();
}


const build = gulp.series(scripts);
exports.build = build;
exports.default = gulp.series(build);

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
    .src("./build/pearson-web-components-min.js")
    .pipe(rename(function(filePath) {
      filePath.dirname = path.join(NEW_S3_DIRECTORY, filePath.dirname);
    }))
    .pipe(awspublish.gzip({ ext: ".gz" }))
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter())
  );
});

