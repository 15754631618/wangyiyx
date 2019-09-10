const gulp = require('gulp'); //引入gulp模块  gulp对象
const html = require('gulp-minify-html'); //引入gulp-minify-html模块。
const css = require('gulp-minify-css'); //引入gulp-minify-css模块。
const uglifyjs = require('gulp-uglify');
const watch = require('gulp-watch');
//1.简单的gulp任务
gulp.task('hehe', function() { //default默认的任务名，编译的时候只需要写gulp
    console.log('hello,gulp');
});

// //2.文件的复制
gulp.task('copyfile', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'));
});

// //3.html文件的压缩。
gulp.task('uglifyhtml', function() {
    return gulp.src('src/*.html')
        .pipe(html()) //执行html压缩
        .pipe(gulp.dest('dist/')) //输出,没有自动创建
});

// //4.css文件的压缩。
gulp.task('uglifycss', function() {
    return gulp.src('src/css/*.css')
        .pipe(css())
        .pipe(gulp.dest('dist/css/'));
});

// //5.js的压缩
gulp.task('uglifyjs', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglifyjs())
        .pipe(gulp.dest('dist/js/'));
});

// //6.监听
gulp.task('default', function() { //default默认的任务名，编译的时候只需要写gulp
    watch(['src/*.html', 'src/css/*.css', 'src/js/*.js'], gulp.parallel('uglifyhtml', 'uglifycss', 'uglifyjs'));
    //watch的第一个参数监听的文件的路径，第二个参数是监听运行的任务名
    //gulp.parallel() –并行运行任务 
});










//1.gulp.task(任务名称,回调函数); 默认的任务名称：default
//2.gulp.src() : 引入文件的目录,路径
//3.pipe:管道流
//4.gulp.dest() : 输出文件目录设置,如果目录不存在，自动创建。