// ==UserScript==
// @name Annotate with Hypothes.is
// @match *
// @run-at context-menu
// ==/UserScript==

(function () { window.hypothesisConfig = function () { return { showHighlights: true, appType: 'bookmarklet' } }; var d = document; var s = d.createElement('script'); s.setAttribute('src', 'https://hypothes.is/embed.js'); d.body.appendChild(s) })()
