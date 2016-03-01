var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack-stream');

var WebpackDevServer = require("webpack-dev-server");

gulp.task('webpackbuild', function(){
  return gulp.src('src/app.js')
    .pipe(webpack(require ('./webpack.config.js')))
    .pipe(gulp.dest('public/'))
})

gulp.task('webpack-dev-server', function(callback){
  var compiler = webpack({
        // configuration
  });

  new WebpackDevServer(compiler, {
      // server and middleware options
  }).listen(8080, "localhost", function(err) {
      if(err) throw new gutil.PluginError("webpack-dev-server", err);
      // Server listening
      gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

      // keep the server alive or continue?
      // callback();
  });
})
