var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var source = require('vinyl-source-stream');
var browserify = require("browserify");
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

gulp.task('copy-html', function() {
   gulp.src('./src/**/*.html')
   .pipe(gulp.dest('./dist'));
});

gulp.watch('src/**/*',['default']);

gulp.task('default',['sass','scripts','copy-html'],function(){
    return browserify({
        debug: true,
        entries: ['./dist/scripts/app.js'],
        cache: {},
        packageCache: {}
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("dist/scripts"));
});