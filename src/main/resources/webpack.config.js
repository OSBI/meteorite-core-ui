/*
 *   Copyright 2016 OSBI Ltd
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

var webpack           = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var WebpackDevServer  = require('webpack-dev-server');
var autoprefixer      = require('autoprefixer');
var path              = require('path');
var figlet            = require('figlet');
var chalk             = require('chalk');
var os                = require('os');
var UglifyJsPlugin    = webpack.optimize.UglifyJsPlugin;
var env               = process.env.WEBPACK_ENV;

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
else if (env === 'dev') {
  var chromeBrowser = (os.type() === 'Linux' ? 'chromium-browser' : 'google chrome');
  outputFile = appName + '.js';
  plugins.push(
    // browse to http://localhost:3001 during development
    new BrowserSyncPlugin(
      {
        host: host,
        port: 3001,
        server: contentBase
        // browser: chromeBrowser
      },
      {
        reload: true
      }
    )
  );
}

var config = {
  entry: './src/js/App.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist/saiku',
    filename: outputFile,
    publicPath: contentBase
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=[path][name].[ext]?[hash]'
      },
      {
        test: /\.(jsx|js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(jsx|js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  postcss: function() {
    return [autoprefixer];
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx']
  },
  plugins: plugins
};

if (env === 'dev') {
  // browse to http://localhost:3000 during development
  new WebpackDevServer(webpack(config), {
    contentBase: contentBase,
    hot: false,
    debug: true
  }).listen(3000, host, function(err, result) {
    if (err) {
      console.log(err);
    }
  });

  figlet(' Meteorite Core UI', {
      font: 'Slant'
    }, function(err, data) {
    console.log(chalk.red(data) + '\n');
    console.log(chalk.bold(' Access URLs:'));
    console.log(chalk.blue(' -------------------------------------------------'));
    console.log(' Webpack server runs at:     ' + chalk.blue('http://' + host + ':3000'));
    console.log(' BrowserSync server runs at: ' + chalk.blue('http://' + host + ':3001'));
    console.log(chalk.blue(' -------------------------------------------------\n'));
    console.log(' Hit \'' + chalk.blue('<ctrl-c>') + '\' to shutdown.\n');
  });
}

module.exports = config;
