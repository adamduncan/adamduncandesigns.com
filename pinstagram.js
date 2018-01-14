const testVar = 'Hello';
const collectionData = require('./pinstagram/collectionFetched.json');

const renderItem = function (item) {
  const itemShortcode = item.url.split('https://www.instagram.com/p/')[1].slice(0, -1);
  return `
    <div class="grid__col" data-shortcode="${ itemShortcode }">
      <div class="card">
        <a class="card__image-link" href="${ item.url }" target="_blank" rel="noopener noreferrer">
          <img src="${ item.thumbnail_url }" alt="${ item.title }" />
        </a>
        <p class="card__attr"><a class="card__link" href="${ item.author_url }" target="_blank" rel="noopener noreferrer">
          &mdash; ${ item.author_name }
          </a></p>
      </div>
    </div>
  `
}

module.exports = function render(locals) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head prefix="og: http://ogp.me/ns">
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>Adam Duncan &mdash; Pinstagram</title>
      
      <meta name="theme-color" content="#fb576b">
      <meta name="description" content="Visual inspiration collected from Instagram." />

      <meta property="og:title" content="Adam Duncan &mdash; Pinstagram">
      <meta property="og:description" content="Visual inspiration collected from Instagram.">
      <meta property="og:image" content="https://adamduncandesigns.com/icon-touch.png">

      <meta name="twitter:card" content="summary">
      <meta name="twitter:site" content="duncanadam">
      <meta name="twitter:title" content="Adam Duncan &mdash; Pinstagram">
      <meta name="twitter:description" content="Visual inspiration collected from Instagram.">
      <meta name="twitter:image" content="https://adamduncandesigns.com/icon-touch.png">

      <link rel="manifest" href="/manifest.json">

      <style>
        @font-face {
          font-family: 'Plex';
          src: url('/fonts/IBMPlexSans-Light-Latin1.woff2') format('woff2'),
              url('/fonts/IBMPlexSans-Light-Latin1.woff') format('woff');
          font-weight: 400;
          font-style: normal;
        }
        @font-face {
          font-family: 'Plex';
          src: url('/fonts/IBMPlexSans-SemiBold-Latin1.woff2') format('woff2'),
              url('/fonts/IBMPlexSans-SemiBold-Latin1.woff') format('woff');
          font-weight: 700;
          font-style: normal;
        }
        html {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
        }
        *, *:before, *:after {
          box-sizing: inherit;
        }
        body {
          background-color: #f3f3f4;
          color: #212637;
          font-family: "Plex",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
          height: 100%;
          letter-spacing: 0.005em;
          margin: 0;
          padding: 12vw 6vw;
        }

        img {
          height: auto;
          width: 100%;
        }

        h1, h2, h3, p, ul, li {
          margin: 0;
        }

        h1, 
        .t-large {
          font-size: 2em;
          font-size: calc(30px + (50 - 30) * ((100vw - 600px) / (2400 - 600)));
          line-height: 1.25;
        }

        p, ul {
          margin-bottom: 1.46em;
        }
        h3, p, ul {
          font-size: 1.25em;
          font-size: calc(18px + (28 - 18) * ((100vw - 600px) / (2400 - 600)));
          line-height: 1.46;
          max-width: 55ch;
        }
        ul {
          list-style: none;
          padding-left: 0;
        }

        a {
          border-bottom: 1px solid #fb576b;
          color: #fb576b;
          text-decoration: none;
          transition: color 200ms ease-out;
        }
        a:hover,
        a:focus {
          color: #fff;
        }

        @media (min-width: 47.5em) {
          .grid {
            align-items: flex-start;
            display: flex;
            flex-wrap: wrap;
            margin-left: -1.25vw;
          }
          .grid__col {
            padding-left: 1.25vw;
            padding-right: 1.25vw;
            width: 50%;
          }
        }
        @media (min-width: 75em) {
          .grid__col {
            width: 33.333%;
          }
        }
        
        .card {
          margin-bottom: 3vw;
        }
        .card__image-link {
          border-bottom: 0;
          display: block;
          padding-bottom: 0.375rem;
        }
        .card__attr {
          font-size: 0.75rem;
        }
        .card__link {
          border-bottom-color: transparent;
          color: #aaa;
        }
        .card__link:hover,
        .card__link:focus {
          border-bottom-color: #aaa;
          color: #212637;
        }

        .c-highlight {
          color: #58c7cd;
        }

        .pad-top {
          padding-top: 2em;
        }

        .visually-hidden {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
        }
      </style>

      <link rel="shortcut icon" href="/icon-touch.png">
      <link rel="apple-touch-icon-precomposed" href="/icon-touch.png">

    </head>
    <body>

      <h1>Pinstagram</h1>
      <p class="t-large">Visual inspiration collected from Instagram</p>

      <p class="pad-top">Hello, brief project description</p>

      <div class="grid pad-top">
      ${ 
        collectionData.items.map(function (item) {
          return renderItem(item)
        }).join('')
      }
      </div>

      <script type="text/javascript">
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-2589170-5']);
        _gaq.push(['_trackPageview']);
        (function () {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
      </script>
    </body>
  </html>
  `;
};