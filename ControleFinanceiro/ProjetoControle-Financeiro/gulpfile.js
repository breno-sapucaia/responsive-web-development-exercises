const gulp = require('gulp')
const babel = require('babel')

gulp.task('default', () => {
    return gulp.src('controleFinanceiro-producao/**/*')
            .pipe(babel({
                minify:true,
                preset: "env"
        })
            .pipe(gulp.dest()))
})