if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),f={module:{uri:t},exports:c,require:r};s[t]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/190-29a7ffbb85aa441d.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/495-45dfa8d8633d142f.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/app/_not-found/page-4f67f4ed4ff3761f.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/app/error-20b8b138792df393.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/app/layout-8994c35ed257f2b0.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/app/page-346b37c545339e67.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/app/room1/layout-dadf1791ab761245.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/app/room1/page-01e18ccfcb8aaced.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/app/room2/layout-573133f19bcc1ce5.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/app/room2/page-1229ee7ea82f70e9.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/app/room3/layout-fc104aec7ed08aca.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/app/room3/page-fa2e4c6831e68d0f.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/app/room4/layout-0dc587cd4d198726.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/app/room4/page-298ec8826a2f0557.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/app/room5/layout-ea3ac5f7aa03aeb5.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/app/room5/page-e76a671ab22e7275.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/f7333993-967eaa93b012ca4b.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/fd9d1056-13aa76f036058ae3.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/main-7f7fb6751134c492.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/main-app-5ba5af42430bc6e9.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-7749e775ebd121c9.js",revision:"kwOz1eV_vxpsDO7fwLJpe"},{url:"/_next/static/css/56ad7d20e3972e0c.css",revision:"56ad7d20e3972e0c"},{url:"/_next/static/css/d086b5ef3bc21992.css",revision:"d086b5ef3bc21992"},{url:"/_next/static/kwOz1eV_vxpsDO7fwLJpe/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/kwOz1eV_vxpsDO7fwLJpe/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/122c360d7fe6d395-s.p.woff2",revision:"9b2795fb691d8f8a83312a4436f5a453"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/9bbb7f84f3601865-s.woff2",revision:"d8134b7ae9ca2232a397ef9afa6c8d30"},{url:"/_next/static/media/9f05b6a2725a7318-s.woff2",revision:"afbfd524bdefea1003f0ee71b617e50e"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/a8eac78432f0a60b-s.woff2",revision:"be605f007472cc947fe6b6bb493228a5"},{url:"/_next/static/media/c740c1d45290834f-s.woff2",revision:"bff99a4bbc4740c49b75b52f290be90e"},{url:"/_next/static/media/d0697bdd3fb49a78-s.woff2",revision:"50b29fea20cba8e522c34a1413592253"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
