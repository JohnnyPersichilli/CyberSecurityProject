require('webpack');

module.exports = {
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: [/node_modules/,/\.png$/],
            loader: ["babel-loader"]
          },
          {
            test: /\.css$/,
            exclude: /\.png$/,
            loader: 'style-loader'
          },{
            test: /\.css$/,
            exclude: /\.png$/,
            loader: 'css-loader'
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i, 
            loader: "file-loader?name=/src/images/novaLogo.png"
        }
        ]
      },
    entry: "./src/index.js",
    output: {
      filename: "bundle.js"
    }, 
    watch: true,
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
      },
  }