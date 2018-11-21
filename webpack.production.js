var path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename:'./dist/bundle.js'
  },
  target:'web',
  mode:"production",
  resolve: {
    extensions: ['*','.js', '.jsx']
  },
  module: {
    rules: [{
      test:/.js$/,
      exclude:/node_modules/,
      use:{
        loader:'babel-loader'
      }
    },{
      test:/.scss$/,
      exclude:/node_modules/,
      use:['style-loader', 'css-loader', 'sass-loader']
    }]
  }
}
