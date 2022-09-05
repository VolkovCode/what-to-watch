const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: false,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ],
  },
  resolve: {
    modules: [path.resolve(process.cwd(), 'src'), 'node_modules'],
    extensions: ['.js', '.jsx', '*'],
    symlinks: false,
    cacheWithContext: false
  },
  devtool: 'source-map',
  performance: {
    hints: false
  },
};
