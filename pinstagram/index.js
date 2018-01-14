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
/***/ (function(module, exports) {

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
      <!-- <meta name="description" content="Freelance front-end developer with more than 9 years’ experience, keen to work on a wide range of projects, and deepen my understanding of modern web technologies." />
      
      <meta property="og:title" content="Adam Duncan &mdash; Front-End Web Developer, London">
      <meta property="og:description" content="Freelance front-end developer with more than 9 years’ experience, keen to work on a wide range of projects, and deepen my understanding of modern web technologies.">
      <meta property="og:image" content="https://adamduncandesigns.com/icon-touch.png">

      <meta name="twitter:card" content="summary">
      <meta name="twitter:site" content="duncanadam">
      <meta name="twitter:title" content="Adam Duncan &mdash; Front-End Web Developer, London">
      <meta name="twitter:description" content="Freelance front-end developer with more than 9 years’ experience, keen to work on a wide range of projects, and deepen my understanding of modern web technologies.">
      <meta name="twitter:image" content="https://adamduncandesigns.com/icon-touch.png"> -->

      <link rel="manifest" href="/manifest.json">

      <style>
        @font-face {
          font-family: 'Plex';
          src: url('fonts/IBMPlexSans-Light-Latin1.woff2') format('woff2'),
              url('fonts/IBMPlexSans-Light-Latin1.woff') format('woff');
          font-weight: 400;
          font-style: normal;
        }
        @font-face {
          font-family: 'Plex';
          src: url('fonts/IBMPlexSans-SemiBold-Latin1.woff2') format('woff2'),
              url('fonts/IBMPlexSans-SemiBold-Latin1.woff') format('woff');
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

      <link rel="shortcut icon" href="icon-touch.png">
      <link rel="apple-touch-icon-precomposed" href="icon-touch.png">

    </head>
    <body>

      <h1>Pinstagram</h1>
      <p class="t-large">Visual inspiration collected from Instagram</p>

      <p class="pad-top">Brief project description</p>


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

/***/ })
/******/ ]);
});