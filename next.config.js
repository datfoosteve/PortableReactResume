module.exports = {
  webpack: (config) => {
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: "_next/static/worker",
            outputPath: "static/worker"
          }
        }
      ]
    });

    config.module.rules.unshift({
      test: /\.svg$/,
      use: [
        {
          loader: 'svg-inline-loader'
        }
      ]
    });
    return config;
  }
};
