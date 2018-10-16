import React from "react";
import "isomorphic-fetch";
import Head from "next/head";
import homeHtml from "../static/home.html";

const trackingCode = `
var _paq = _paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="//tracking.igor-fischer.rocks/";
  _paq.push(['setTrackerUrl', u+'piwik.php']);
  _paq.push(['setSiteId', '1']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();
`;

export default () => (
  <div>
    <Head>
      <link rel="stylesheet" type="text/css" href="/static/main.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Ubuntu+Condensed"
        rel="stylesheet"
      />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{ __html: trackingCode }}
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/static/favicon.png"
      />
      <link rel="manifest" href="/static/manifest.json" />
    </Head>
    <div dangerouslySetInnerHTML={{ __html: homeHtml }} />
  </div>
);
