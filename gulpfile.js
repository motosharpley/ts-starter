const gulp = require("gulp");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const watchify = require("watchify");
const tsify = require("tsify");
const gutil = require("gulp-util");


let watchedBrowserify = watchify(browserify({
  basedir: ".",
  debug: true,
  entries: ["src/main.ts"],
  cache: {},
  packageCache: {}
}).plugin(tsify));

gulp.task("html", function () {
  return gulp.src("src/*.html")
    .pipe(gulp.dest("dist"));
});

function bundle(){
  return watchedBrowserify
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist"));
}

gulp.task("default", ["html"],bundle);
watchedBrowserify.on("update",bundle);
watchedBrowserify.on("log", gutil.log);
