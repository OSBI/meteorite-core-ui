var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');

var appName = 'saiku';
var host = 'localhost';
var port = 3000;
var contentBase = './';

var plugins = [];
var outputFile;

if (env === 'build') {
  outputFile = appName + '.min.js';
  plugins.push(new UglifyJsPlugin({ minimize: true }));
} 
else {
  outputFile = appName + '.js';
  plugins.push(
    // browse to http://localhost:3001/ during development
    new BrowserSyncPlugin(
      {
        host: host,
        port: port,
        server: contentBase
      },
      {
        reload: true
      }
    )
  );
}

var config = {
  entry: './src/js/saiku/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist/saiku',
    filename: outputFile,
    publicPath: contentBase
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
  // browse to http://localhost:3000/ during development
  new WebpackDevServer(webpack(config), {
    contentBase: contentBase,
    hot: false,
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
