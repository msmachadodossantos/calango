"use strict";

const gulp = require("gulp");
const { dest, series, watch } = require("gulp");
const concat = require("gulp-concat");
const clean = require("gulp-clean");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");

// ---------------------------------------------------------------------------------------------------------------------

const allSrc = "src/**/*.*";

// ---------------------------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------------------------

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
      gridSystemScript
    )
  );
};
