var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('scripts', function() {
    var tsResult = gulp.src("./src/**/*.ts") 
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('./dist'));
});

gulp.task('default',['sass','scripts']);