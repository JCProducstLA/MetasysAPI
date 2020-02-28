const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')
require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')

function a(done){
    if(util.noop){
        gulp.series(['deps','app'])
    }else{
        gulp.series(['deps','app','server'])
    }
    done()
}

gulp.task('default',gulp.series(['deps','app','server']))