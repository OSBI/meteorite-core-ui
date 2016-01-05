var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');

var appName = 'saiku';
var host = '127.0.0.1';
var port = '9999';

var plugins = [];
var outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = appName + '.min.js';
} else {
  outputFile = appName + '.js';
}

var config = {
  entry: './src/js/saiku/test/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist/saiku',
    filename: outputFile,
    publicPath: './'
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx']
  },
  plugins: plugins
};

if (env === 'dev') {
  new WebpackDevServer(webpack(config), {
    contentBase: './',
    hot: true,
    debug: true
  }).listen(port, host, function(err, result) {
    if (err) {
      console.log(err);
    }
  });
  console.log('----------------------------------------------------');
  console.log('Local web server runs at http://' + host + ':' + port);
  console.log('----------------------------------------------------');
}

module.exports = config;
