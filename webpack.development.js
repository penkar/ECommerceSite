var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename:'./dist/bundle.js'
  },
  watch:true,
  mode:"development",
  target:'web',
  resolve: {
    extensions: ['*','.js', '.jsx']
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     filename:"./src/index.html"
  //   })
  // ],
  module: {
    rules: [{
      test:/.js$/,
      exclude:/node_modules/,
      use:{
        loader:'babel-loader'
      }
    }]
  }
}
