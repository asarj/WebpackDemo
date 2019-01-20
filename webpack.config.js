module.exports = {
  entry: './app.js',
  output: {
    filename: './build.js',
    path: __dirname
  },
  watch: true,
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  /*
    IMPROVEMENT: I used the webpack docs to integrate the same changes in EP3
    to the newer changes reflected in the docs, the video tutorial follows the
    old format
  */
  module: {
        rules: [
            {
              test: /\.js$/,
              enforce: "pre",
              exclude: /node_modules/,
              use:[
                {
                  loader: `jshint-loader`,
                }
              ]
            },
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
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader?url=false']
            }
        ]
    },
};
