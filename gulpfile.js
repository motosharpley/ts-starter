const gulp = require("gulp");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const tsify = require("tsify");

gulp.task("html", function(){
  return gulp.src("src/*.html")
    .pipe(gulp.dest("dist"));
});

gulp.task("default", ["html"], function() {
  return browserify({
    basedir: ".",
    debug: true,
    entries: ["src/main.ts"],
    cache: {},
    packageCache: {}
  })
  .plugin(tsify)
  .bundle()
  .pipe(source("bundle.js"))
  .pipe(gulp.dest("dist"));
});
