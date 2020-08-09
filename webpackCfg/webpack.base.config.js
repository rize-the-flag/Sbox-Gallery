const path = require( `path` );
const MiniCssExtractPlugin = require( `mini-css-extract-plugin` );
const TerserPlugin = require( `terser-webpack-plugin` );
const StylelintPlugin = require( `stylelint-webpack-plugin` );
const {CleanWebpackPlugin} = require( `clean-webpack-plugin` );
const HtmlWebpackPlugin = require( `html-webpack-plugin` );

const PATHS = {
  src: path.join( __dirname, `../src` ),
  dist: path.join( __dirname, `../build` ),
  assets: `assets`,

  cssLinterRulesCfg: path.join( __dirname, `./.stylelintrc.json` ),
  postCss: path.join( __dirname, `./` ),
};

console.log( path.join( __dirname, `/` ) );

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', 'css'],
  },
  externals: {
    paths: PATHS,
  },
  entry: {
    app: ['babel-polyfill', PATHS.src],
  },
  output: {
    filename: `${PATHS.assets}/js/[name].[hash].js`,
    path: PATHS.dist,
    publicPath: '/build'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin( {
                          test: /\.js(\?.*)?$/i,
                          sourceMap: true,
                        } ),
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: `babel-loader`,
        options: {
          configFile: path.join( __dirname, `./.babelrc`),
        },
        exclude: `/node_modules/`,
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          `style-loader`,
          MiniCssExtractPlugin.loader,
          {
            loader: `css-loader`,
            options: {sourceMap: true},
          },
          {
            loader: `postcss-loader`,
            options: {
              sourceMap: true,
              config: {
                path: PATHS.postCss,
              }
            },
          },
          {
            loader: `sass-loader`,
            options: {sourceMap: true},
          },
        ],
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin( {
                                filename: `${PATHS.assets}/css/[name].css`,
                                sourceMap: true,
                              }, ),
    new StylelintPlugin( {
                           configFile: `${PATHS.cssLinterRulesCfg}`,
                           files: `src/(css|scss|less|sass)/**/*.(css|scss|less|sass)`,
                           fix: true,
                         } ),
    new HtmlWebpackPlugin( {
                             template: `${PATHS.src}/index.html`,
                           } )
  ],
};
