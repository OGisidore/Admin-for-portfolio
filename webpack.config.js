const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
   mode: 'development',
  entry: {
    index :'./src/index.ts',
    utilities : './src/utilities.ts',
    chart: './src/chart.ts',
    perfor: './src/chartsperfrmana.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    // contentBase: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true,
    open: true,
  },
};
