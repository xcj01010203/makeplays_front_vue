var gulp = require('gulp');
var webpack = require('gulp-webpack');
var named = require('vinyl-named');

var fs = require('fs');
var path = require('path');

var scriptsPath = 'apps';

function getFolders(dir){

	return fs.readdirSync(dir).filter(

		function(file){

			return fs.statSync(path.join(dir, file)).isDirectory();
		}
	);
}

gulp.task('default', function() {

	var folders = getFolders(scriptsPath);

	//在每一个文件夹中分别执行一次函数，并且返回异步 stream
	var tasks = folders.map(function(folder){

		return gulp.src(path.join(scriptsPath, folder, '/js/index.js'))
			.pipe(named())
			.pipe(webpack({
				
			  module: {
			    loaders: [
			      { test: /\.vue$/, loader: 'vue'}
			    ]
			  },
			  //devtool: 'source-map',
			  watch: true

			}))
			.pipe(gulp.dest(scriptsPath+'/'+folder))
	});
});