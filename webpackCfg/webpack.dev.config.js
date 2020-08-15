const webpack = require( `webpack` );
const {merge} = require( `webpack-merge` );
const baseWebpackConfig = require( `./webpack.base.config` );

const devWebpackConfig = merge( baseWebpackConfig, {
  mode: `development`,
  devtool: `cheap-module-eval-source-map`,
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 8081,
    overlay: true,
    historyApiFallback: {
      index: '/'
    },
    hot: true
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin( {
                                          filename: `[file].map`
                                        } ),
  ]
} );

module.exports = new Promise( ( resolve, _ ) => {
  resolve( devWebpackConfig );
} );
