const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './public/comments.php',
    './public/index.php',
    './public/footer.php',
    './public/singular.php',
    './public/searchform.php',
    './public/component/adjacent-post.php',
    './public/component/card.php',
    './public/component/entry.php',
    './public/component/entry-header.php',
    './public/component/eyecatch-overtop.php',
    './public/component/global-nav.php',
    './public/component/widget-sidebar-archiive.php',
    './public/component/pagination.php',
    './public/component/post-thumbnail.php',

    './public/layout/content-body-archive-column-1-wide.php',
    './public/layout/content-body-archive-column-2-left-sidebar.php',
    './public/layout/content-body-archive-column-2-right-sidebar.php',
    './public/layout/content-body-column-1.php',
    './public/layout/content-body-column-1-wide.php',
    './public/layout/content-body-column-2-right-sidebar.php',
    './public/layout/content-body-column-2-right-sidebar.php'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        anchor: 'var(--color-anchor)',
        lightblue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e'
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      height: {
        '10vh': '10vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '75vh': '75vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '1/2vh': '50vh',
        '1/3vh': '33.33vh',
        '2/3vh': '66.67vh',
        '1/4vh': '25vh',
        '2/4vh': '50vh',
        '3/4vh': '75vh'
      },
      lineHeight: {
        'more-relaxed': '1.75'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ]
}
