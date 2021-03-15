const { src, dest, series } = require("gulp");
var sass = require("gulp-sass");
sass.compiler = require("node-sass");
const del = require("del");
const { watch } = require("gulp");
var webserver = require("gulp-webserver");

function clean() {
  return del("public/**", { force: true });
}

function copy() {
  return src(["script.js"]).pipe(dest("public/"));
}

function copyImages(done) {
  return src(["img/**"]).pipe(dest("public/img/"));
}
function copyFonts(done) {
  return src(["fonts/**"]).pipe(dest("public/fonts/"));
}

function compile() {
  return src(["index.html"]).pipe(dest("public/"));
}

function sassCompile() {
  return src("./style.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(dest("./public"));
}

function webserverTask() {
  return src("./public").pipe(
    webserver({
      livereload: true,
      open: true
    })
  );
}

function watchTask() {
  return watch(
    ["*.html", "*.scss", "*.js", "img/**", "partials/**", "fonts/**"],
    series(clean, compile, copy, copyImages, sassCompile, copyFonts)
  );
}

exports.default = series(
  clean,
  compile,
  copy,
  copyImages,
  sassCompile,
  copyFonts,
  webserverTask,
  watchTask
);
exports.build = series(
  clean,
  compile,
  copy,
  copyImages,
  sassCompile,
  copyFonts
);
