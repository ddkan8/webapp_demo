var gulp 	= require('gulp'),
	rjs 	= require('requirejs'),
	clean 	=  require('gulp-clean'),
	useref 	= require('gulp-useref'),
	RevAll 	= require('gulp-rev-all');


gulp.task('requirejsBuild',['clean'], function (cb) {
	rjs.optimize({
        appDir: './app/',
        baseUrl: './',
        mainConfigFile: "app/assets/common/requirejsMain.js",
        dir: 'release',
        optimize: 'uglify2',
        /*generateSourceMaps: false,*/
        preserveLicenseComments: false,
        // useSourceUrl: true,
        optimizeCss: 'standard',
        /*
        *   请在modules内配置业务模块的入口文件
        */
        modules:[
            {
                name: 'assets/common/requirejsMain'
            },
            {
                name: 'module/menuView/example/tableTpl',
                exclude: ['global_ref']
            },
            {
                name: 'module/menuView/auto_reply/auto_reply',
                exclude: ['global_ref']
            },
            {
                name: 'module/menuView/demo31/demo',
                exclude: ['global_ref']
            },
            {
                name: 'module/nav/contentNav',
                exclude: ['global_ref']
            },
            {
                name: 'module/nav/headNav',
                exclude: ['global_ref']
            },
            {
                name: 'module/menuView/usrMng/usrMain',
                exclude: ['global_ref']
            }
        ]
    }, function(buildResponse){
	    // console.log('build response', buildResponse);
	    cb();
	}, cb);
})

gulp.task('clean', function () {
    return gulp.src('release/')
        .pipe(clean({force: true}))
        .pipe(clean());
});

//test
gulp.task('copy',['clean'],function(){
	return gulp.src('app/**/*')
	    .pipe( gulp.dest('release/'));
})

gulp.task('revall',['useref'], function () {  
	var revAll = new RevAll({
		dontRenameFile: ['index.html']
	});
	gulp.src([
		'release/index.html',
		'release/assets/css/**/*.css',
		'release/assets/fonts/**/*',
		'release/assets/common/**/*',
		'release/assets/img/**/*',
		'release/module/**/*.+(html|js)',
		'release/js/**/*',
		'release/tpl/**/*.tpl'
	])
	.pipe(revAll.revision())
	.pipe(gulp.dest('release/'))
	.pipe(revAll.manifestFile())
	.pipe(gulp.dest('release/'))
	.pipe(revAll.versionFile())
	.pipe(gulp.dest('release/'));
});

gulp.task('useref',['requirejsBuild'], function () {
    var assets = useref.assets();

    return gulp.src('release/**/*.html')
        .pipe(assets)
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('release/'));
});


gulp.task('default', ['clean', 'requirejsBuild', 'useref', 'revall']);
