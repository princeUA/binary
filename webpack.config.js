var path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
      contentBase: path.join(__dirname, "/public/"),
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
                        presets: ['@babel/env', '@babel/react']
                      }
          }
        },
        {
          test: /\.css$/,
          use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }
          ]
        }
      ]
    },
    output: {
      path: __dirname + "/public/",
      filename: "bundle.js",
      chunkFilename: '[name].js'
    }
};
