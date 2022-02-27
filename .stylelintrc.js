module.exports = {
  // ==================
  // 定義済ルールセット
  // ==================

  extends: [
    // SCSS標準ルール
    'stylelint-config-recommended-scss',

    // CSS標準ルール
    'stylelint-config-standard',

    // プロパティ記述順序ルール
    'stylelint-config-recess-order'
  ],

  // ==========
  // プラグイン
  // ==========

  plugins: [
    // display値によって無効化されてしまうプロパティの検出
    'stylelint-declaration-block-no-ignored-properties'
  ],

  // ======================
  // プロジェクトルール定義
  // ======================

  rules: {
    // @から始まる記述への警告
    'at-rule-no-unknown': null,

    // @から始まる記述への警告（SCSS）
    "scss/at-rule-no-unknown": [
      true, {
        // @use, @forward構文の使用を許可
        ignoreAtRules: ['use', 'forward', 'tailwind']
      }
    ],

    // 重複したセレクタの検出
    'no-duplicate-selectors': null,

    // display値によって無効化されてしまうプロパティの検出
    'plugin/declaration-block-no-ignored-properties': true
  }
}

// module.exports = {
//   extends: [
//     'stylelint-config-property-sort-order-smacss',
//     'stylelint-config-recommended-scss',
//     'stylelint-config-prettier',
//     // 'stylelint-config-recommended',
//   ],
//   rules: {
//     'at-rule-no-unknown': [
//       true,
//       {
//         ignoreAtRules: ['extends', 'tailwind'],
//       },
//     ],
//     'block-no-empty': null,
//     'unit-whitelist': ['em', 'rem', 's'],
//   },
// };
