const gulp = require('gulp');
const ts = require('gulp-typescript');
// générer les sourcemaps pour le débogueur https://github.com/ivogabe/gulp-typescript/issues/201#issuecomment-138088048
const sourcemaps = require('gulp-sourcemaps');
var path = require('path');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];
const CSS_FILES = ['public/css/*.css'];
const JS_FILES = ['public/lib/*.js'];

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = tsProject
  .src()
  .pipe(sourcemaps.init())
  .pipe(tsProject());
  return tsResult.js
    .pipe(sourcemaps.write({
      // Return relative source map root directories per file.
      sourceRoot: function (file) {
        var sourceFile = path.join(file.cwd, file.sourceMap.file);
        return path.relative(path.dirname(sourceFile), file.cwd);
      }
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function watchSrc() {
  return gulp.watch('src/**/*.ts', gulp.series('scripts'));
});

gulp.task('jsonAssets', function jsonAssets() {
  return gulp.src(JSON_FILES)
  .pipe(gulp.dest('dist'));
});

gulp.task('jsAssets', function jsAssets() {
  return gulp.src(JS_FILES, {base: './public'})
  .pipe(gulp.dest('dist/public'));
});

gulp.task('cssAssets', function cssAssets() {
  return gulp.src(CSS_FILES, {base: './public'})
  .pipe(gulp.dest('dist/public'));
});

gulp.task('build', gulp.parallel('jsonAssets', 'jsAssets', 'cssAssets', 'scripts') );

gulp.task('default', gulp.parallel('watch', 'build'));

