import { resolve } from 'path'

import HtmlPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import MiniCssPlugin from 'mini-css-extract-plugin'

import alias from './dev-helpers/alias'
import { devRoot, devPlugins } from './dev-helpers/webpack-dev'
import { prodRoot, prodPlugins } from './dev-helpers/webpack-prod'

const isDev = process.argv[2] == 'serve'

export default {
  ...(isDev ? devRoot : prodRoot),

  entry: resolve('src/main.ts'),
  resolve: {
    alias,
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          (isDev ? 'style-loader' : MiniCssPlugin.loader),
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    ...(isDev ? devPlugins : prodPlugins),

    new HtmlPlugin({ template: resolve('src/index.html') }),
    new CopyPlugin({
      patterns: [
        {
          from: resolve('src/favicon.svg'),
          to: resolve('dist'),
        },
      ],
    }),
  ],
}
