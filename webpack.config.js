var debug = process.env.NODE_ENV !== "production";
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/index.js",
  devServer: {
    port: 3000,
    host: "0.0.0.0",
    historyApiFallback: true
  },
  module: {
    loaders: [
        {
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
            }
        }, {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        }, {
          test: /(\.eot|\.woff2|\.woff|\.ttf|\.svg|\.jpg)/,
          loader: 'file-loader'
        }
    ]
  },
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist/',
    publicPath: '/'
  },
  plugins: debug ? [HTMLWebpackPluginConfig] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
