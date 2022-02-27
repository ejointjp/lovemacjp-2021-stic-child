<?php
/*
YARPP Template: stic
Description: Requires a theme which supports post thumbnails
Author: Takashi Fujisaki
*/ ?>


<?php if (have_posts()) : ?>
  <h3 class="c-widget__title">関連記事</h3>
  <div class="yarpp space-y-4">
    <?php while (have_posts()) : the_post();
      get_template_part('component/post-thumbnail');
    endwhile; ?>
  </div>
<?php endif;
