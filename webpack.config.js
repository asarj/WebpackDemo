const ExtractTextPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: './app.js',
  output: {
    filename: './build.js',
    path: __dirname
  },
  plugins:[
    new ExtractTextPlugin("dist/style.scss")
  ],
  watch: true,
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  /*
    IMPROVEMENT: I used the webpack docs to integrate the same changes in EP3
    to the newer changes reflected in the docs, the video tutorial follows the
    old webpack v2
  */
  module: {
        rules: [
            // {
            //   test: /\.js$/,
            //   enforce: "pre",
            //   exclude: /node_modules/,
            //   use:[
            //     {
            //       loader: ["jshint-loader"],
            //     }
            //   ]
            // },
            {
                test: /.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query:{
                  presets: ["es2015"]
                }
            },
            {
                test: /.less$/,
                loader: ['style-loader', 'css-loader?url=false', 'less-loader'],
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader?url=false', 'sass-loader'],
            },
            // IMPROVEMENT: used updated docs to implement extract text with the mini-css-extract-plugin
            {
                test: /\.scss@/,
                use: [
                    ExtractTextPlugin.loader, "css-loader", "sass-loader",
                ]
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader?url=false']
            }
        ]
    },

};
