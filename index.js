(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const testVar = 'Hello';
const collectionData = __webpack_require__(1);

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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"items":[{"url":"https://www.instagram.com/p/Bd7pqo5n5XK/","version":"1.0","title":"New on CP: Find Issue 002 of ‘SPIN/Adentures in typography’ within our ‘Magazine’ section at Counter-Print.co.uk #counterprintbooks #spinadventures #magazine","author_name":"counterprintbooks","author_url":"https://www.instagram.com/counterprintbooks","author_id":224282811,"media_id":"1692129335049164234_224282811","provider_name":"Instagram","provider_url":"https://www.instagram.com","type":"rich","width":658,"height":null,"html":"<blockquote class=\"instagram-media\" data-instgrm-captioned data-instgrm-permalink=\"https://www.instagram.com/p/Bd7pqo5n5XK/\" data-instgrm-version=\"8\" style=\" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);\"><div style=\"padding:8px;\"> <div style=\" background:#F8F8F8; line-height:0; margin-top:40px; padding:50% 0; text-align:center; width:100%;\"> <div style=\" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;\"></div></div> <p style=\" margin:8px 0 0 0; padding:0 4px;\"> <a href=\"https://www.instagram.com/p/Bd7pqo5n5XK/\" style=\" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;\" target=\"_blank\">New on CP: Find Issue 002 of ‘SPIN/Adentures in typography’ within our ‘Magazine’ section at Counter-Print.co.uk #counterprintbooks #spinadventures #magazine</a></p> <p style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;\">A post shared by <a href=\"https://www.instagram.com/counterprintbooks/\" style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;\" target=\"_blank\"> Counter-Print</a> (@counterprintbooks) on <time style=\" font-family:Arial,sans-serif; font-size:14px; line-height:17px;\" datetime=\"2018-01-14T13:45:57+00:00\">Jan 14, 2018 at 5:45am PST</time></p></div></blockquote>","thumbnail_url":"https://instagram.flhr4-2.fna.fbcdn.net/vp/8b5530379f07f1be0281e232e1fe7d27/5ADCAC95/t51.2885-15/s612x612/e35/26157776_160499974575892_7014619460606623744_n.jpg","thumbnail_width":612,"thumbnail_height":612},{"url":"https://www.instagram.com/p/Bds48Lxjtjb/","version":"1.0","title":"Reaally short on time today, so here is a quick repost of one of my favourites of 2017 (didn‘t quite make it into the top 9 though). Would love to hear your thoughts!😄 #typographicposter #typographic #typeposter #typeinspire #posterlabs #posteraday #typelover #printisntdead #condensedtype #helvetica #goodtype","author_name":"stefanhuerlemann","author_url":"https://www.instagram.com/stefanhuerlemann","author_id":22281493,"media_id":"1687974386772924635_22281493","provider_name":"Instagram","provider_url":"https://www.instagram.com","type":"rich","width":658,"height":null,"html":"<blockquote class=\"instagram-media\" data-instgrm-captioned data-instgrm-permalink=\"https://www.instagram.com/p/Bds48Lxjtjb/\" data-instgrm-version=\"8\" style=\" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);\"><div style=\"padding:8px;\"> <div style=\" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;\"> <div style=\" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;\"></div></div> <p style=\" margin:8px 0 0 0; padding:0 4px;\"> <a href=\"https://www.instagram.com/p/Bds48Lxjtjb/\" style=\" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;\" target=\"_blank\">Reaally short on time today, so here is a quick repost of one of my favourites of 2017 (didn‘t quite make it into the top 9 though). Would love to hear your thoughts!😄 #typographicposter #typographic #typeposter #typeinspire #posterlabs #posteraday #typelover #printisntdead #condensedtype #helvetica #goodtype</a></p> <p style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;\">A post shared by <a href=\"https://www.instagram.com/stefanhuerlemann/\" style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;\" target=\"_blank\"> Stefan Hürlemann Designer</a> (@stefanhuerlemann) on <time style=\" font-family:Arial,sans-serif; font-size:14px; line-height:17px;\" datetime=\"2018-01-08T20:10:49+00:00\">Jan 8, 2018 at 12:10pm PST</time></p></div></blockquote>","thumbnail_url":"https://instagram.flhr4-2.fna.fbcdn.net/vp/e5dea08acb87338464fc578120e3375e/5AE6DDEA/t51.2885-15/s640x640/sh0.08/e35/26067668_259504454584168_7807979145144565760_n.jpg","thumbnail_width":640,"thumbnail_height":640},{"url":"https://www.instagram.com/p/Bdzgp6Ah9aY/","version":"1.0","title":"one of the examples that are generated from the basic glyph concept shown in the last post. \n#bauhaus #bauhausarchiv #saschalobe #L2M3","author_name":"sascha_lobe","author_url":"https://www.instagram.com/sascha_lobe","author_id":229971550,"media_id":"1689837902466897560_229971550","provider_name":"Instagram","provider_url":"https://www.instagram.com","type":"rich","width":658,"height":null,"html":"<blockquote class=\"instagram-media\" data-instgrm-captioned data-instgrm-permalink=\"https://www.instagram.com/p/Bdzgp6Ah9aY/\" data-instgrm-version=\"8\" style=\" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);\"><div style=\"padding:8px;\"> <div style=\" background:#F8F8F8; line-height:0; margin-top:40px; padding:62.4537037037037% 0; text-align:center; width:100%;\"> <div style=\" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;\"></div></div> <p style=\" margin:8px 0 0 0; padding:0 4px;\"> <a href=\"https://www.instagram.com/p/Bdzgp6Ah9aY/\" style=\" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;\" target=\"_blank\">one of the examples that are generated from the basic glyph concept shown in the last post.  #bauhaus #bauhausarchiv #saschalobe #L2M3</a></p> <p style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;\">A post shared by <a href=\"https://www.instagram.com/sascha_lobe/\" style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;\" target=\"_blank\"> Sascha Lobe</a> (@sascha_lobe) on <time style=\" font-family:Arial,sans-serif; font-size:14px; line-height:17px;\" datetime=\"2018-01-11T09:53:17+00:00\">Jan 11, 2018 at 1:53am PST</time></p></div></blockquote>","thumbnail_url":"https://instagram.flhr4-2.fna.fbcdn.net/vp/733e9b7a3d2c9de0191cea1d5d5083e7/5AE3D81C/t51.2885-15/sh0.08/e35/p640x640/26151827_207604203131538_3292001679725035520_n.jpg","thumbnail_width":640,"thumbnail_height":799},{"url":"https://www.instagram.com/p/Bduu-Nbn2Y7/","version":"1.0","title":"New year, new identity. \nFor those of you following us on instagram @design_process this will come as no surprise 😉 As we kick-off 2018 we’re rolling out our new look, feel and positioning. Here’s our holding page and showreel - website coming soon 💥 — Sennep.com","author_name":"sennepldn","author_url":"https://www.instagram.com/sennepldn","author_id":1699466089,"media_id":"1688493495479658043_1699466089","provider_name":"Instagram","provider_url":"https://www.instagram.com","type":"rich","width":658,"height":null,"html":"<blockquote class=\"instagram-media\" data-instgrm-captioned data-instgrm-permalink=\"https://www.instagram.com/p/Bduu-Nbn2Y7/\" data-instgrm-version=\"8\" style=\" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);\"><div style=\"padding:8px;\"> <div style=\" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;\"> <div style=\" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;\"></div></div> <p style=\" margin:8px 0 0 0; padding:0 4px;\"> <a href=\"https://www.instagram.com/p/Bduu-Nbn2Y7/\" style=\" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;\" target=\"_blank\">New year, new identity.  For those of you following us on instagram @design_process this will come as no surprise 😉 As we kick-off 2018 we’re rolling out our new look, feel and positioning. Here’s our holding page and showreel - website coming soon 💥 — Sennep.com</a></p> <p style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;\">A post shared by <a href=\"https://www.instagram.com/sennepldn/\" style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;\" target=\"_blank\"> Sennep</a> (@sennepldn) on <time style=\" font-family:Arial,sans-serif; font-size:14px; line-height:17px;\" datetime=\"2018-01-09T13:22:20+00:00\">Jan 9, 2018 at 5:22am PST</time></p></div></blockquote>","thumbnail_url":"https://instagram.flhr4-2.fna.fbcdn.net/vp/b34d06fa4a2c9c88ebc258739c03c8b2/5A5E5BCE/t51.2885-15/s640x640/e15/26152953_1918451065112311_7813652921496633344_n.jpg","thumbnail_width":640,"thumbnail_height":640},{"url":"https://www.instagram.com/p/BdxKeGch4U8/","version":"1.0","title":"De La Montagne Hotel by @simonlangloisssssss\n—\nSee more on the-brandidentity.com\n—\n#logo #branding #brandidentity #logotype #graphicdesign #design #contemporary #typography #studio","author_name":"thebrandidentity","author_url":"https://www.instagram.com/thebrandidentity","author_id":1956899935,"media_id":"1689177384211154236_1956899935","provider_name":"Instagram","provider_url":"https://www.instagram.com","type":"rich","width":658,"height":null,"html":"<blockquote class=\"instagram-media\" data-instgrm-captioned data-instgrm-permalink=\"https://www.instagram.com/p/BdxKeGch4U8/\" data-instgrm-version=\"8\" style=\" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);\"><div style=\"padding:8px;\"> <div style=\" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;\"> <div style=\" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;\"></div></div> <p style=\" margin:8px 0 0 0; padding:0 4px;\"> <a href=\"https://www.instagram.com/p/BdxKeGch4U8/\" style=\" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;\" target=\"_blank\">De La Montagne Hotel by @simonlangloisssssss — See more on the-brandidentity.com — #logo #branding #brandidentity #logotype #graphicdesign #design #contemporary #typography #studio</a></p> <p style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;\">A post shared by <a href=\"https://www.instagram.com/thebrandidentity/\" style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;\" target=\"_blank\"> The Brand Identity</a> (@thebrandidentity) on <time style=\" font-family:Arial,sans-serif; font-size:14px; line-height:17px;\" datetime=\"2018-01-10T12:00:57+00:00\">Jan 10, 2018 at 4:00am PST</time></p></div></blockquote>","thumbnail_url":"https://instagram.flhr4-2.fna.fbcdn.net/vp/1c4cf99d240367d3786abc225cd5f393/5AFF448A/t51.2885-15/s640x640/sh0.08/e35/26262013_916181305207397_3852985710650851328_n.jpg","thumbnail_width":640,"thumbnail_height":640},{"url":"https://www.instagram.com/p/BdudVj6lRWW/","version":"1.0","title":"Feeling anxious 😟 today I’m trying to combine hand embroidery and painting on some new canvas. I’m not sure 🤔 #acrylic #pencil #handembroidery #rawcanvas #artwork #kunst #art #minimalart #contemporaryart #abstractart #mypaaske","author_name":"paaskemy","author_url":"https://www.instagram.com/paaskemy","author_id":1301403183,"media_id":"1688415935332160918_1301403183","provider_name":"Instagram","provider_url":"https://www.instagram.com","type":"rich","width":658,"height":null,"html":"<blockquote class=\"instagram-media\" data-instgrm-captioned data-instgrm-permalink=\"https://www.instagram.com/p/BdudVj6lRWW/\" data-instgrm-version=\"8\" style=\" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);\"><div style=\"padding:8px;\"> <div style=\" background:#F8F8F8; line-height:0; margin-top:40px; padding:62.5% 0; text-align:center; width:100%;\"> <div style=\" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;\"></div></div> <p style=\" margin:8px 0 0 0; padding:0 4px;\"> <a href=\"https://www.instagram.com/p/BdudVj6lRWW/\" style=\" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;\" target=\"_blank\">Feeling anxious 😟 today I’m trying to combine hand embroidery and painting on some new canvas. I’m not sure 🤔 #acrylic #pencil #handembroidery #rawcanvas #artwork #kunst #art #minimalart #contemporaryart #abstractart #mypaaske</a></p> <p style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;\">A post shared by <a href=\"https://www.instagram.com/paaskemy/\" style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;\" target=\"_blank\"> Anne Mette My Paaske</a> (@paaskemy) on <time style=\" font-family:Arial,sans-serif; font-size:14px; line-height:17px;\" datetime=\"2018-01-09T10:48:05+00:00\">Jan 9, 2018 at 2:48am PST</time></p></div></blockquote>","thumbnail_url":"https://instagram.flhr4-2.fna.fbcdn.net/vp/2ae954591c68a101954067b170198b94/5AE1F5B4/t51.2885-15/sh0.08/e35/p640x640/26154045_155023661813402_2688578759119863808_n.jpg","thumbnail_width":640,"thumbnail_height":800},{"url":"https://www.instagram.com/p/BdvXVhpFfzW/","version":"1.0","title":"The Doorman/slash Hitman","author_name":"nicholasosmond","author_url":"https://www.instagram.com/nicholasosmond","author_id":1815911903,"media_id":"1688671019588779222_1815911903","provider_name":"Instagram","provider_url":"https://www.instagram.com","type":"rich","width":658,"height":null,"html":"<blockquote class=\"instagram-media\" data-instgrm-captioned data-instgrm-permalink=\"https://www.instagram.com/p/BdvXVhpFfzW/\" data-instgrm-version=\"8\" style=\" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);\"><div style=\"padding:8px;\"> <div style=\" background:#F8F8F8; line-height:0; margin-top:40px; padding:51.75925925925926% 0; text-align:center; width:100%;\"> <div style=\" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;\"></div></div> <p style=\" margin:8px 0 0 0; padding:0 4px;\"> <a href=\"https://www.instagram.com/p/BdvXVhpFfzW/\" style=\" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;\" target=\"_blank\">The Doorman/slash Hitman</a></p> <p style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;\">A post shared by <a href=\"https://www.instagram.com/nicholasosmond/\" style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;\" target=\"_blank\"> nick osmond</a> (@nicholasosmond) on <time style=\" font-family:Arial,sans-serif; font-size:14px; line-height:17px;\" datetime=\"2018-01-09T19:14:54+00:00\">Jan 9, 2018 at 11:14am PST</time></p></div></blockquote>","thumbnail_url":"https://instagram.flhr4-2.fna.fbcdn.net/vp/7ccd0d875084fcf6fb1e729f0292c1da/5AF174F0/t51.2885-15/sh0.08/e35/p640x640/26153257_167968213973832_1462996307764314112_n.jpg","thumbnail_width":640,"thumbnail_height":662},{"url":"https://www.instagram.com/p/BOhZowQBc3l/","version":"1.0","title":"Kimski by @therealfranklyn\n-\nSee more on the site\nwww.the-brandidentity.com\n-\n#logo #branding #brandidentity #logotype #graphicdesign #design #contemporary #typography #studio","author_name":"thebrandidentity","author_url":"https://www.instagram.com/thebrandidentity","author_id":1956899935,"media_id":"1414524509721316837_1956899935","provider_name":"Instagram","provider_url":"https://www.instagram.com","type":"rich","width":658,"height":null,"html":"<blockquote class=\"instagram-media\" data-instgrm-captioned data-instgrm-permalink=\"https://www.instagram.com/p/BOhZowQBc3l/\" data-instgrm-version=\"8\" style=\" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);\"><div style=\"padding:8px;\"> <div style=\" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;\"> <div style=\" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;\"></div></div> <p style=\" margin:8px 0 0 0; padding:0 4px;\"> <a href=\"https://www.instagram.com/p/BOhZowQBc3l/\" style=\" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;\" target=\"_blank\">Kimski by @therealfranklyn - See more on the site www.the-brandidentity.com - #logo #branding #brandidentity #logotype #graphicdesign #design #contemporary #typography #studio</a></p> <p style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;\">A post shared by <a href=\"https://www.instagram.com/thebrandidentity/\" style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;\" target=\"_blank\"> The Brand Identity</a> (@thebrandidentity) on <time style=\" font-family:Arial,sans-serif; font-size:14px; line-height:17px;\" datetime=\"2016-12-27T13:14:43+00:00\">Dec 27, 2016 at 5:14am PST</time></p></div></blockquote>","thumbnail_url":"https://instagram.flhr4-2.fna.fbcdn.net/vp/b4a5b7320482f74a3b6ef788e42939c8/5AF3E1F9/t51.2885-15/s640x640/sh0.08/e35/14597362_391287517886125_8534948006904987648_n.jpg","thumbnail_width":640,"thumbnail_height":640}]}

/***/ })
/******/ ]);
});