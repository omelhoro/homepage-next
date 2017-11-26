import React from 'react';
import 'isomorphic-fetch'
import Head from 'next/head';

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

export default class extends React.Component {
  static async getInitialProps ({res}) {
    try {
      let data = '';
      if (res) {
        // executed on server
        data = await fetch('http://localhost:3000/static/home.html');
      } else {
        // executed on client
        data = await fetch('/static/home.html');
      }
      const html = await data.text();
      return {html};
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/main.css" />
          <link href="https://fonts.googleapis.com/css?family=Ubuntu+Condensed" rel="stylesheet" />
          <script type="text/javascript" dangerouslySetInnerHTML={{__html: trackingCode}} />
        </Head>
        <div dangerouslySetInnerHTML={{__html: this.props.html}} />
      </div>
    )
  }
}
