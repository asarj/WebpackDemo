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
                test: /.js$/,
                exclude: /node_modules/,
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
