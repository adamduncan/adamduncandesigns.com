const collectionData = require('./pinstagram/collectionFetched.json');

const truncate = function (str, length = 140) {
  return str.substring(0, length).replace(/\n/g, ' ').replace(' •', ' ');
};

const renderItem = function (item) {
  const itemShortcode = item.url.split('https://www.instagram.com/p/')[1].slice(0, -1);
  const imageRatioStyle = (item.thumbnail_height && item.thumbnail_width)
    ? `padding-top: ${ item.thumbnail_height / item.thumbnail_width * 100 }%`
    : 'padding-top: 100%';
  // data-shortcode="${ itemShortcode }"
  // alt="${ truncate(item.title) }"
  return `
    <div class="grid__col">
      <div class="card">
        <div class="media-wrap" style="${ imageRatioStyle }">
          <a class="card__image-link" href="${ item.url }" target="_blank" rel="noopener noreferrer">
            <img data-src="${ item.thumbnail_url }" alt="Post by ${ item.author_name }" />
          </a>
        </div>
        <p class="card__attr"><a class="card__link" href="${ item.author_url }" target="_blank" rel="noopener noreferrer">
          — ${ item.author_name }
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

        .media-wrap {
          position: relative;
        }
        img {
          height: auto;
          transition: opacity 300ms ease-out;
          width: 100%;
          will-change: opacity;
        }
        img[data-src] {
          opacity: 0;
        }
        img.show {
          opacity: 1;
        }
        .error {
          background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%201000%201000%22%3E%3Cpath%20fill%3D%22%23CCC%22%20d%3D%22M63.02%2063.02L10%20116.23l191.79%20191.79L393.77%20500%20201.79%20691.98%2010%20883.77l53.02%2053.21L116.23%20990l191.79-191.79L500%20606.23l191.98%20191.98L883.77%20990l53.21-53.02L990%20883.77%20798.21%20691.98%20606.23%20500l191.98-191.98L990%20116.23l-53.02-53.21L883.77%2010%20691.98%20201.79%20500%20393.77%20308.02%20201.79%20116.23%2010%2063.02%2063.02z%22/%3E%3C/svg%3E');
          background-repeat: no-repeat;
          background-size: 22px 22px;
          background-position: center;
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
          text-decoration: none;
          transition: border 200ms ease-out, color 200ms ease-out;
        }
        a:not[class] {
          border-bottom: 1px solid #fb576b;
          color: #fb576b;
        }
        a:not[class]:hover,
        a:not[class]:focus {
          color: #fff;
        }
        .link--breadcrumb {
          border-bottom: 1px solid transparent;
          color: currentColor;
          font-weight: 300;
          opacity: 0.4;
          text-decoration: none;
        }
        .link--breadcrumb[href]:hover,
        .link--breadcrumb[href]:focus {
          border-bottom-color: currentColor;
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
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.05);
        }
        .card__attr {
          font-size: 0.75rem;
          margin-top: 0.75rem;
        }
        .card__link {
          border-bottom: 1px solid transparent;
          color: #888;
        }
        .card__link:hover,
        .card__link:focus {
          border-bottom-color: #888;
          color: #212637;
        }

        .c-highlight {
          color: #58c7cd;
        }

        .pad-top {
          padding-top: 2em;
        }
        .pad-bottom {
          padding-bottom: 2em;
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

      <p class="pad-top"><a href="/" class="link--breadcrumb"><span aria-label="Back to">&larr;</span> Adam Duncan</a></p>

      <div class="grid pad-top pad-bottom">
      ${ 
        collectionData.items.map(function (item) {
          return renderItem(item)
        }).join('')
      }
      </div>

      <p class="pad-top" style="font-size: 0.75rem">All rights reserved by each respective creator.<br />
      Built to showcase some amazing work, because Instagram Collections aren't Pinterest, yet.
      <a href="https://github.com/adamduncan/adamduncandesigns.com" style="border-bottom: 1px solid currentColor; color: currentColor;">Code</a></p>

      <script>
      var images = document.querySelectorAll('[data-src]');
      var config = {
        rootMargin: '100px 0px',
        threshold: 0.01
      };

      function noImageFound(event) {
        event.currentTarget.parentNode.classList.add('error');
        event.currentTarget.removeEventListener('error', noImageFound);
      }

      function mainImageNotFound(event) {
        event.currentTarget.removeEventListener('error', mainImageNotFound);
        // retry with fallback image
        loadFallbackImage(event.currentTarget);
      }

      function showImage(event) {
        event.currentTarget.classList.add('show');
        event.currentTarget.removeEventListener('load', showImage);
      }

      function loadImage(imageEl) {
        imageEl.setAttribute('src', imageEl.getAttribute('data-src'));
        imageEl.addEventListener('load', showImage);
        imageEl.addEventListener('error', mainImageNotFound);
      }

      function loadFallbackImage(imageEl) {
        // how sketchy's this?!
        var imageUrl = imageEl.parentNode.getAttribute('href');
        var fallbackImageId = imageUrl.slice(0, -1).split('/').pop()
        var fallbackImageUrl = 'https://instagram.com/p/' + fallbackImageId + '/media/?size=l'
        imageEl.setAttribute('src', fallbackImageUrl);
        // console.log('loading: ', fallbackImageUrl);
        imageEl.addEventListener('load', showImage);
        imageEl.addEventListener('error', noImageFound);
      }

      if (!('IntersectionObserver' in window)) {
        [].slice.call(images).forEach(function(image) {
          loadImage(image, mainImageNotFound);
        });
      } else {
        var observer = new IntersectionObserver(onIntersection, config);
        images.forEach(function(image) {
          observer.observe(image);
        });

        function onIntersection(entries) {
          entries.forEach(function(entry) {
            if (entry.intersectionRatio > 0) {
              observer.unobserve(entry.target);
              loadImage(entry.target, mainImageNotFound);
            }
          });
        }
      }
      </script>
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