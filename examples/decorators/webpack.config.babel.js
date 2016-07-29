import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './app.js',
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        test: /\.js$/
      }
    ]
  },
  output: {
    filename: '[name].js?[chunkhash]',
    path: 'public'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};
