"use strict";

const gulp = require("gulp");
const { dest, series, watch } = require("gulp");
const concat = require("gulp-concat");
const clean = require("gulp-clean");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");

/* ------------------------------------------------------- */

const allSrc = "src/**/*.*";

/* ------------------------------------------------------- */

const coreStyleSrc = "src/core/scss/**/*.*";
const coreStyleDist = "dist/core/css/";
const coreScriptSrc = "src/core/js/**/*.*";
const coreScriptDist = "dist/core/js/";

function cleanCoreStyle() {
  return gulp
    .src(coreStyleDist, { allowEmpty: true, read: false })
    .pipe(clean());
}

function coreStyle() {
  return gulp
    .src(coreStyleSrc, { allowEmpty: true })
    .pipe(sass({ outputStyle: "compressed" }, "").on("error", sass.logError))
    .pipe(dest(coreStyleDist));
}

function coreScript() {
  return gulp
    .src(coreScriptSrc, { allowEmpty: true })
    .pipe(dest(coreScriptDist))
    .pipe(uglify())
    .pipe(concat("core.js"))
    .pipe(rename({ extname: ".min.js" }))
    .pipe(dest(coreScriptDist));
}

function cleanCoreScript() {
  return gulp
    .src(coreScriptDist, { allowEmpty: true, read: false })
    .pipe(clean());
}

exports.core = series(cleanCoreStyle, coreStyle, cleanCoreScript, coreScript);

/* ------------------------------------------------------- */

const gridSystemStyleSrc = "src/grid_system/scss/**/*.*";
const gridSystemStyleDist = "dist/grid_system/css/";
const gridSystemScriptSrc = "src/grid_system/js/**/*.*";
const gridSystemScriptDist = "dist/grid_system/js/";

function cleanGridSystemStyle() {
  return gulp
    .src(gridSystemStyleDist, { allowEmpty: true, read: false })
    .pipe(clean());
}

function gridSystemStyle() {
  return gulp
    .src(gridSystemStyleSrc, { allowEmpty: true })
    .pipe(sass({ outputStyle: "compressed" }, "").on("error", sass.logError))
    .pipe(dest(gridSystemStyleDist));
}

function gridSystemScript() {
  return gulp
    .src(gridSystemScriptSrc, { allowEmpty: true })
    .pipe(dest(gridSystemScriptDist))
    .pipe(uglify())
    .pipe(concat("core.js"))
    .pipe(rename({ extname: ".min.js" }))
    .pipe(dest(gridSystemScriptDist));
}

function cleanGridSystemScript() {
  return gulp
    .src(gridSystemScriptDist, { allowEmpty: true, read: false })
    .pipe(clean());
}

exports.core = series(
  cleanGridSystemStyle,
  gridSystemStyle,
  cleanGridSystemScript,
  gridSystemScript
);

/* ------------------------------------------------------- */

const typographyStyleSrc = "src/typography/scss/**/*.*";
const typographyStyleDist = "dist/typography/css/";
const typographyScriptSrc = "src/typography/js/**/*.*";
const typographyScriptDist = "dist/typography/js/";

function cleanTypographyStyle() {
  return gulp
    .src(typographyStyleDist, { allowEmpty: true, read: false })
    .pipe(clean());
}

function typographyStyle() {
  return gulp
    .src(typographyStyleSrc, { allowEmpty: true })
    .pipe(sass({ outputStyle: "compressed" }, "").on("error", sass.logError))
    .pipe(dest(typographyStyleDist));
}

function typographyScript() {
  return gulp
    .src(typographyScriptSrc, { allowEmpty: true })
    .pipe(dest(typographyScriptDist))
    .pipe(uglify())
    .pipe(concat("core.js"))
    .pipe(rename({ extname: ".min.js" }))
    .pipe(dest(typographyScriptDist));
}

function cleanTypographyScript() {
  return gulp
    .src(typographyScriptDist, { allowEmpty: true, read: false })
    .pipe(clean());
}

exports.core = series(
  cleanTypographyStyle,
  typographyStyle,
  cleanTypographyScript,
  typographyScript
);

/* ------------------------------------------------------- */

const visibilityStyleSrc = "src/visibility/scss/**/*.*";
const visibilityStyleDist = "dist/visibility/css/";
const visibilityScriptSrc = "src/visibility/js/**/*.*";
const visibilityScriptDist = "dist/visibility/js/";

function cleanVisibilityStyle() {
  return gulp
    .src(visibilityStyleDist, { allowEmpty: true, read: false })
    .pipe(clean());
}

function visibilityStyle() {
  return gulp
    .src(visibilityStyleSrc, { allowEmpty: true })
    .pipe(sass({ outputStyle: "compressed" }, "").on("error", sass.logError))
    .pipe(dest(visibilityStyleDist));
}

function visibilityScript() {
  return gulp
    .src(visibilityScriptSrc, { allowEmpty: true })
    .pipe(dest(visibilityScriptDist))
    .pipe(uglify())
    .pipe(concat("core.js"))
    .pipe(rename({ extname: ".min.js" }))
    .pipe(dest(visibilityScriptDist));
}

function cleanVisibilityScript() {
  return gulp
    .src(visibilityScriptDist, { allowEmpty: true, read: false })
    .pipe(clean());
}

exports.core = series(
  cleanVisibilityStyle,
  visibilityStyle,
  cleanVisibilityScript,
  visibilityScript
);

/* ------------------------------------------------------- */

const colorSystemStyleSrc = "src/color_system/scss/**/*.*";
const colorSystemStyleDist = "dist/color_system/css/";
const colorSystemScriptSrc = "src/color_system/js/**/*.*";
const colorSystemScriptDist = "dist/color_system/js/";

function cleanColorSystemStyle() {
  return gulp
    .src(colorSystemStyleDist, { allowEmpty: true, read: false })
    .pipe(clean());
}

function colorSystemStyle() {
  return gulp
    .src(colorSystemStyleSrc, { allowEmpty: true })
    .pipe(sass({ outputStyle: "compressed" }, "").on("error", sass.logError))
    .pipe(dest(colorSystemStyleDist));
}

function colorSystemScript() {
  return gulp
    .src(colorSystemScriptSrc, { allowEmpty: true })
    .pipe(dest(colorSystemScriptDist))
    .pipe(uglify())
    .pipe(concat("core.js"))
    .pipe(rename({ extname: ".min.js" }))
    .pipe(dest(colorSystemScriptDist));
}

function cleanColorSystemScript() {
  return gulp
    .src(colorSystemScriptDist, { allowEmpty: true, read: false })
    .pipe(clean());
}

exports.core = series(
  cleanColorSystemStyle,
  colorSystemStyle,
  cleanColorSystemScript,
  colorSystemScript
);

/* ------------------------------------------------------- */

const listsStyleSrc = "src/lists/scss/**/*.*";
const listsStyleDist = "dist/lists/css/";
const listsScriptSrc = "src/lists/js/**/*.*";
const listsScriptDist = "dist/lists/js/";

function cleanListsStyle() {
  return gulp
    .src(listsStyleDist, { allowEmpty: true, read: false })
    .pipe(clean());
}

function listsStyle() {
  return gulp
    .src(listsStyleSrc, { allowEmpty: true })
    .pipe(sass({ outputStyle: "compressed" }, "").on("error", sass.logError))
    .pipe(dest(listsStyleDist));
}

function listsScript() {
  return gulp
    .src(listsScriptSrc, { allowEmpty: true })
    .pipe(dest(listsScriptDist))
    .pipe(uglify())
    .pipe(concat("core.js"))
    .pipe(rename({ extname: ".min.js" }))
    .pipe(dest(listsScriptDist));
}

function cleanListsScript() {
  return gulp
    .src(listsScriptDist, { allowEmpty: true, read: false })
    .pipe(clean());
}

exports.core = series(
  cleanListsStyle,
  listsStyle,
  cleanListsScript,
  listsScript
);

/* ------------------------------------------------------- */

exports.default = function () {
  watch(
    allSrc,
    series(
      cleanCoreStyle,
      coreStyle,
      cleanCoreScript,
      coreScript,
      cleanGridSystemStyle,
      gridSystemStyle,
      cleanGridSystemScript,
      gridSystemScript,
      cleanTypographyStyle,
      typographyStyle,
      cleanTypographyScript,
      typographyScript,
      cleanVisibilityStyle,
      visibilityStyle,
      cleanVisibilityScript,
      visibilityScript,
      cleanColorSystemStyle,
      colorSystemStyle,
      cleanColorSystemScript,
      colorSystemScript
    )
  );
};

/* ------------------------------------------------------- */

exports.dist = series(
  cleanCoreStyle,
  coreStyle,
  cleanCoreScript,
  coreScript,
  cleanGridSystemStyle,
  gridSystemStyle,
  cleanGridSystemScript,
  gridSystemScript,
  cleanTypographyStyle,
  typographyStyle,
  cleanTypographyScript,
  typographyScript,
  cleanVisibilityStyle,
  visibilityStyle,
  cleanVisibilityScript,
  visibilityScript,
  cleanColorSystemStyle,
  colorSystemStyle,
  cleanColorSystemScript,
  colorSystemScript
);
