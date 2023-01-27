module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  webpack: (config) => {
    config.module.rules.unshift({
      test:  /pdf\.worker\.(min\.)?js/,
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

    config.module.rules.unshift({
      test: /\.(json|svg|jpg|jpeg|png|gif|webp|css|.js)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            publicPath: '/_next/static/',
            outputPath: 'static/'
          }
        }
      ]
    });

    config.module.rules.unshift({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            publicPath: '/_next/static/pdf',
            outputPath: 'static/pdf'
          }
        }
      ]
    });

    config.module.rules.unshift({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              'next/babel',
              '@emotion/babel-preset-css-prop'
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-syntax-dynamic-import',
              'babel-plugin-emotion'
            ]
          }
        },
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      ]
    });
    return config;
  }
}
