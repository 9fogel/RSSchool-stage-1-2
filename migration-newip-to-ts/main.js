(()=>{"use strict";var n={291:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(645),o=t.n(r),i=t(667),s=t.n(i),a=t(765),c=o()((function(n){return n[1]})),d=s()(a);c.push([n.id,".burger {\r\n  display: none;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .burger {\r\n  position: absolute;\r\n  top: 60px;\r\n  right: 0;\r\n  margin-right: 34px;\r\n  width: 35px;\r\n  height: 32px;\r\n  background-color: transparent;\r\n  background-image: url("+d+");\r\n  }\r\n\r\n  .burger-active {\r\n    display: block;\r\n  }\r\n\r\n  .burger:hover {\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n@media (max-width: 436px) {\r\n  .burger {\r\n    top: 42px;\r\n  }\r\n}",""]);const l=c},669:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(645),o=t.n(r),i=t(667),s=t.n(i),a=t(474),c=o()((function(n){return n[1]})),d=s()(a);c.push([n.id,".news {\n  margin: 0 auto;\n}\n\n.news-hidden {\n  display: none;\n}\n\n.news__item {\n  display: flex;\n  flex-direction: column;\n  margin: 1rem auto;\n  margin-bottom: 1.6%;\n  background: #fff;\n  color: #333;\n  line-height: 1.4;\n  font-family: Arial, sans-serif;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n  transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n  position: relative;\n  height: 200px;\n}\n\n.news__item .news__meta-photo {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: url("+d+");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n  margin: auto;\n  padding: 0;\n  list-style: none;\n}\n\n.news__item .news__meta-details {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: -120%;\n  margin: auto;\n  transition: left 0.2s;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  padding: 10px;\n  width: 100%;\n  font-size: 0.9rem;\n}\n\n.news__item .news__description {\n  padding: 1rem;\n  background: #fff;\n  position: relative;\n  z-index: 1;\n}\n\n.news__item .news__description h2 {\n  line-height: 1;\n  margin: 0;\n  font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n  font-size: 1rem;\n  font-weight: 300;\n  text-transform: uppercase;\n  color: #a2a2a2;\n  margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n  text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n  color: #5ad67d;\n  display: inline-block;\n  position: relative;\n  text-decoration: none;\n  font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n  content: '→';\n  margin-left: -10px;\n  opacity: 0;\n  vertical-align: middle;\n  transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n  margin-left: 5px;\n  opacity: 1;\n}\n\n.news__item p {\n  margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n  margin-top: 1.25rem;\n  position: relative;\n}\n\n.news__item p:first-of-type:before {\n  content: '';\n  position: absolute;\n  height: 5px;\n  background: #5ad67d;\n  width: 35px;\n  top: -0.75rem;\n  border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n  left: 0%;\n}\n\n@media (min-width: 640px) {\n  .news__item {\n    flex-direction: row;\n    max-width: 700px;\n  }\n\n  .news__item .news__meta {\n    flex-basis: 40%;\n    height: auto;\n  }\n\n  .news__item .news__description {\n    flex-basis: 60%;\n  }\n\n  .news__item .news__description:before {\n    -webkit-transform: skewX(-3deg);\n    transform: skewX(-3deg);\n    content: '';\n    background: #fff;\n    width: 30px;\n    position: absolute;\n    left: -10px;\n    top: 0;\n    bottom: 0;\n    z-index: -1;\n  }\n\n  .news__item.alt {\n    flex-direction: row-reverse;\n  }\n\n  .news__item.alt .news__description:before {\n    left: inherit;\n    right: -10px;\n    -webkit-transform: skew(3deg);\n    transform: skew(3deg);\n  }\n\n  .news__item.alt .news__meta-details {\n    padding-left: 25px;\n  }\n}\n",""]);const l=c},501:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,".sources {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  margin-right: auto;\n  width: 300px;\n  height: 100vh;\n  overflow: auto;\n  font: 300 1em 'Fira Sans', sans-serif;\n}\n\n.sources::-webkit-scrollbar {\n  width: 4px; /* width for vertical scroll */\n  background-color: #143861;\n}\n\n.sources::-webkit-scrollbar-thumb {\n  background-color: #843465;\n  border-radius: 9em;\n  box-shadow: inset 1px 1px 10px #f3faf7;\n}\n\n.sources::-webkit-scrollbar-thumb:hover {\n  background-color: #253861;\n}\n\n.source__item {\n  background: none;\n  border: 2px solid #30c5ff;\n  font: inherit;\n  line-height: 1;\n  margin: 0.5em;\n  padding: 1em 2em;\n  color: #70d6ff;\n  transition: 0.25s;\n  cursor: pointer;\n}\n\n.source__item:hover,\n.source__item:focus {\n    border-color: #3fcc59;\n    color: #69db7e;\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n    transform: translateY(-0.25em);\n}\n\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}\n\n@media (max-width: 1000px) {\n    .sources {\n        width: 200px;\n    }\n\n    .source__item {\n        height: 160px;\n        padding: 1.3em 0.8em;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        vertical-align: middle;\n    }\n\n    .source__item-name {\n        text-overflow: ellipsis;\n    }\n}\n\n@media (max-width: 800px) {\n\n    .sources-hidden {\n        display: none;\n    }\n}",""]);const i=o},767:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"body {\n  color: #fff;\n  background: #17181c;\n  font-family: sans-serif;\n}\n\nheader {\n  padding: 10px 30px;\n}\n\nheader h1 {\n  font-size: 40px;\n  font-weight: 800;\n}\n\n.main {\n  display: flex;\n  justify-content: center;\n  padding: 10px 30px;\n  gap: 36px;\n}\n\nfooter {\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.footer-icons {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  margin: 0;\n  padding: 0;\n  width: 30%;\n  list-style: none;\n  font-size: 14px;\n}\n\n.footer-link {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  text-decoration: none;\n  color: inherit;\n  opacity: 0.5;\n}\n\n.footer-link:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n  transition: ease-in-out .3s;\n  opacity: 0.8;\n}\n\n.year {\n  opacity: 0.5;\n}\n\nfooter .copyright {\n  margin: 0;\n  padding: 0;\n  font-size: 14px;\n  color: #333;\n  text-align: center;\n}\nfooter .copyright a {\n  color: #444;\n}\nfooter .copyright a:hover {\n  color: #555;\n}\nfooter .copyright:before {\n  content: '©';\n}\n\n@media (max-width: 768px) {\n  .footer-icons {\n    width: 50%;\n  }\n}\n\n@media (max-width: 548px) {\n  .footer-icons {\n    width: 90%;\n  }\n}\n\n@media (max-width: 436px) {\n  header h1 {\n    padding-bottom: 0;\n    font-size: 28px;\n  }\n}\n\n\n/* search */\n.form-search {\n  width: 100%;\n  max-width: 30%;\n}\n\n.search-label {\n  position: relative;\n  width: 100%;\n  max-width: 500px;\n  height: 44px;\n}\n\n.search-input {\n  padding-left: 20px;\n  padding-right: 50px;\n  width: 100%;\n  height: 100%;\n  font-family: inherit;\n  font-size: 100%;\n  color: #E6E6E6;\n  background-color: transparent;\n  border: 1px solid #E6E6E6;\n  border-radius: 22px;\n}\n\n.search-input[type=\"search\" i]::-webkit-search-cancel-button {\n  display: none;\n}\n\n.search-submit {\n  position: absolute;\n  right: 20px;\n  top: 50%;\n  color: #E6E6E6;\n  transform: translateY(-50%);\n  background-color: transparent;\n  border: none;\n  width: 22px;\n  height: 22px;\n}\n\n.search-submit:hover {\n  cursor: pointer;\n  color: #69db7e;\n}",""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<n.length;a++){var c=[].concat(n[a]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function s(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function a(n,e){for(var t={},r=[],o=0;o<n.length;o++){var a=n[o],c=e.base?a[0]+e.base:a[0],d=t[c]||0,l="".concat(c," ").concat(d);t[c]=d+1;var u=s(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:g(p,e),references:1}),r.push(l)}return r}function c(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var s=o(n.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var d,l=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(i,s[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,m=0;function g(n,e){var t,r,o;if(e.singleton){var i=m++;t=h||(h=c(e)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=c(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=a(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=s(t[r]);i[o].references--}for(var c=a(n,e),d=0;d<t.length;d++){var l=s(t[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=c}}}},765:n=>{n.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzNSAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI5LjIzOTYgMTQuNjY2N0g1Ljc2MDQyQzQuOTk1MjcgMTQuNjY2NyA0LjM3NSAxNS4yMzM4IDQuMzc1IDE1LjkzMzNWMTYuMDY2N0M0LjM3NSAxNi43NjYyIDQuOTk1MjcgMTcuMzMzMyA1Ljc2MDQyIDE3LjMzMzNIMjkuMjM5NkMzMC4wMDQ3IDE3LjMzMzMgMzAuNjI1IDE2Ljc2NjIgMzAuNjI1IDE2LjA2NjdWMTUuOTMzM0MzMC42MjUgMTUuMjMzOCAzMC4wMDQ3IDE0LjY2NjcgMjkuMjM5NiAxNC42NjY3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTI5LjIzOTYgMjEuMzMzM0g1Ljc2MDQyQzQuOTk1MjcgMjEuMzMzMyA0LjM3NSAyMS45MDA0IDQuMzc1IDIyLjZWMjIuNzMzM0M0LjM3NSAyMy40MzI5IDQuOTk1MjcgMjQgNS43NjA0MiAyNEgyOS4yMzk2QzMwLjAwNDcgMjQgMzAuNjI1IDIzLjQzMjkgMzAuNjI1IDIyLjczMzNWMjIuNkMzMC42MjUgMjEuOTAwNCAzMC4wMDQ3IDIxLjMzMzMgMjkuMjM5NiAyMS4zMzMzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTI5LjIzOTYgOEg1Ljc2MDQyQzQuOTk1MjcgOCA0LjM3NSA4LjU2NzExIDQuMzc1IDkuMjY2NjdWOS40QzQuMzc1IDEwLjA5OTYgNC45OTUyNyAxMC42NjY3IDUuNzYwNDIgMTAuNjY2N0gyOS4yMzk2QzMwLjAwNDcgMTAuNjY2NyAzMC42MjUgMTAuMDk5NiAzMC42MjUgOS40VjkuMjY2NjdDMzAuNjI1IDguNTY3MTEgMzAuMDA0NyA4IDI5LjIzOTYgOFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="},474:(n,e,t)=>{n.exports=t.p+"assets/news_placeholder.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n;!function(n){n.Sources="sources",n.Everything="everything"}(n||(n={}));const e=class{constructor(n,e){this.baseLink=n,this.options=e}getResp({endpoint:n,options:e={}},t=(()=>{console.error("No callback for GET response")})){this.load("GET",n,t,e)}errorHandler(n){if(!n.ok)throw 401!==n.status&&404!==n.status||console.log(`Sorry, but there is ${n.status} error: ${n.statusText}`),Error(n.statusText);return n}makeUrl(n,e){const t=Object.assign(Object.assign({},this.options),n);let r=`${this.baseLink}${e}?`;return Object.keys(t).forEach((n=>{r+=`${n}=${t[n]}&`})),console.log(r.slice(0,-1)),r.slice(0,-1)}load(n,e,t,r={}){fetch(this.makeUrl(r,e),{method:n}).then(this.errorHandler).then((n=>n.json())).then((n=>t(n))).catch((n=>console.error(n)))}},r=class extends e{constructor(){super("https://nodenews.up.railway.app/",{apiKey:"b046409c36214d2497ac233ba33b75cf"})}},o=class extends r{getSources(e){super.getResp({endpoint:n.Sources},e)}getNews(e,t){let r=e.target;const o=e.currentTarget;for(;r!==o;)if(r instanceof HTMLElement&&r){if(r.classList.contains("source__item")){const e=r.getAttribute("data-source-id"),i=document.querySelector(".search-form");if(o instanceof HTMLElement&&o&&e&&i){const r=String(i.search.value);o.getAttribute("data-source")!==e&&(o.setAttribute("data-source",e),super.getResp({endpoint:n.Everything,options:{sources:e,q:r}},t))}return}r=r.parentNode}}};var i=t(379),s=t.n(i),a=t(669);s()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;var c=t(501);s()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;class d{constructor(){this.news=new class{draw(n){const e=n.length>=10?n.filter(((n,e)=>e<10)):n,t=document.createDocumentFragment(),r=document.querySelector("#newsItemTemp");r&&e.forEach(((n,e)=>{const o=r.content.cloneNode(!0);if(o instanceof DocumentFragment&&o){const r=o.querySelector(".news__item");e%2&&r&&r.classList.add("alt");const i=o.querySelector(".news__meta-photo");i&&n.urlToImage&&(i.style.backgroundImage=`url(${n.urlToImage})`);const s=o.querySelector(".news__meta-author");s&&(s.textContent=n.author||n.source.name);const a=o.querySelector(".news__meta-date");a&&(a.textContent=n.publishedAt.slice(0,10).split("-").reverse().join("-"));const c=o.querySelector(".news__description-title");c&&(c.textContent=n.title);const d=o.querySelector(".news__description-source");d&&(d.textContent=n.source.name);const l=o.querySelector(".news__description-content");l&&(l.textContent=n.description);const u=o.querySelector(".news__read-more a");u&&u.setAttribute("href",n.url),t.append(o)}}));const o=document.querySelector(".news");o&&(o.innerHTML="",o.appendChild(t))}},this.sources=new class{draw(n){const e=document.createDocumentFragment(),t=document.querySelector("#sourceItemTemp");t&&n.forEach((n=>{const r=t.content.cloneNode(!0);if(r instanceof DocumentFragment&&r){const t=r.querySelector(".source__item-name");t&&(t.textContent=n.name);const o=r.querySelector(".source__item");o&&o.setAttribute("data-source-id",n.id),e.append(r)}}));const r=document.querySelector(".sources");r&&r.append(e)}}}drawNews(n){const e=(null==n?void 0:n.articles)?null==n?void 0:n.articles:[];this.news.draw(e)}drawSources(n){const e=(null==n?void 0:n.sources)?null==n?void 0:n.sources:[];this.sources.draw(e)}}var l=t(291);s()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;var u=t(767);s()(u.Z,{insert:"head",singleton:!1}),u.Z.locals,(new class{constructor(){this.controller=new o,this.view=new d,this.burger=new class{manageBurger(){const n=document.querySelector(".burger"),e=document.querySelector(".sources"),t=document.querySelector(".news");n&&e&&t&&(!t.classList.contains("news-visible")&&e.classList.contains("sources-hidden")&&n.classList.add("burger-active"),n.addEventListener("click",(()=>{e.classList.remove("sources-hidden"),t.classList.add("news-hidden")}))),e&&t&&n&&e.addEventListener("click",(()=>{e.classList.add("sources-hidden"),t.classList.remove("news-hidden"),n.classList.add("burger-active")}))}}}start(){const n=document.querySelector(".sources"),e=document.querySelector(".search-form");n&&(n.addEventListener("click",(n=>this.controller.getNews(n,(n=>this.view.drawNews(n))))),this.controller.getSources((n=>this.view.drawSources(n)))),e&&e.addEventListener("submit",(n=>{n.preventDefault(),this.controller.getNews(n,(n=>this.view.drawNews(n)))})),window.innerWidth<=800&&this.burger.manageBurger(),window.addEventListener("resize",(()=>{window.innerWidth<=800&&this.burger.manageBurger()}))}}).start()})()})();