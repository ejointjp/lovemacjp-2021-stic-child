<?php

function favicon()
{
?>
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1da8d8">
  <meta name="msapplication-TileColor" content="#1da8d8">
  <meta name="theme-color" content="#ffffff">
<?php
}
add_action('add_head', 'favicon');


/* プラグインCSSの削除 */
function lovemacjp_remove_scripts()
{
  // Snow Monkey Forms
  wp_deregister_style('snow-monkey-forms');
}
add_action('wp_enqueue_scripts', 'lovemacjp_remove_scripts', 100);
