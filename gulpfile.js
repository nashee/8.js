const {dest, src, watch, series, parallel} = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const browserSync = require('browser-sync').create();
const del = require("del");
const babel = require('gulp-babel');
const concatenate = require('gulp-concat');



// clean
async function clean(cb){
    await del('build');
    cb();
}

// html
function html(cb){
    src("src/*.html")
    .pipe(dest('build'))
    cb();
}

function img(cb){
    src("src/assets/img/*")
    .pipe(dest('build/assets/img/'))
    cb();
}


//css
    /*
function css(cb){
    src('src/assets/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest("build/assets/css"))
    cb();
}  */

function cssFA(cb){
    src('src/assets/vendors/fontawesome/font.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest("build/assets/vendors/fontawesome/"))
    cb();
}

function css(cb){
    src('src/assets/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest("build/assets/css/"))
    cb();
}

//fontawsome
function fas(cb){
    src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
    .pipe(dest('build/assets/vendors/webfonts/'))
    cb();
}
exports.fas = fas;

  
function js(cb){
    src([
        //'src/assets/js/modules/index.js',
        'src/assets/js/main.js'

    ])
  //  .pipe(babel({
    //  presets: ['@babel/env']
    // }))
   
    .pipe(dest('build/assets/js'));
    cb();
  
}

// server
function server(cb){
    browserSync.init({
        notify: false,
        open: false,
        online: false,
        server: {
            baseDir: "build"
        }
    })
    cb();
}

function watcher(cb){
    watch("src/*.html").on("change", series(html, browserSync.reload))
    watch("src/assets/sass/**/*.scss").on("change", series(css, browserSync.reload))
    watch("src/assets/js/**/*.js").on("change", series(js, browserSync.reload))

    cb();
}
exports.default = series(clean,img,parallel(html, css,js, cssFA,fas, server), watcher);