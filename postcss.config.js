// const sortCssMediaQueries = require('sort-css-media-queries');

module.exports = (ctx) => {
  return {
    map: ctx.options.map,
    plugins: {
      // 'postcss-import': {
      //   /**
      //    * @module postcss-import
      //    * @url https://www.npmjs.com/package/postcss-import
      //    * --------------------------------------------------------- */
      // },

      // 重複するセレクタをまとめる
      'postcss-combine-duplicated-selectors': {},
      // メディアクエリをまとめる

      '@lipemat/css-mqpacker': {
        // メディアクエリをソート
        sort: require('sort-css-media-queries')
      },

      // CSSの属性をソート
      'css-declaration-sorter': {
        // ソート方式
        order: 'smacss' // alphabetical, smacss, concentric-css
      },

      'postcss-preset-env': {
        stage: 3,
        features: {
          'nesting-rules': true
        },
        autoprefixer: {
          cascade: false,
          grid: 'autoplace'
        }
      },
      'postcss-flexbugs-fixes': {},
      tailwindcss: {}
    }
  }
}
