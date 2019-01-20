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
