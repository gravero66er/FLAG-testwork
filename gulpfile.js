// import gulp from 'gulp'
// import sass from 'gulp-sass'
// import browserSync from 'browser-sync'

let gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync");

gulp.task("sass", async function () {
  return gulp
    .src("app/scss/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("browser-sync", function () {
  browserSync({
    server: {
      baseDir: "app",
    },
    notify: false,
  });
});

gulp.task("scripts", function () {
  return gulp
    .src("app/js/common.js")
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("code", function () {
  return gulp.src("app/*.html").pipe(browserSync.reload({ stream: true }));
});

gulp.task("watch", function () {
  gulp.watch("app/scss/**/*.scss", gulp.parallel("sass"));
  gulp.watch("app/*html", gulp.parallel("code"));
  gulp.watch("app/js/common.js", gulp.parallel("scripts"));
});

gulp.task("default", gulp.parallel("sass", "browser-sync", "watch"));
