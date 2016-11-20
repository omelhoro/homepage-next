import React from 'react';
import 'isomorphic-fetch'
import Head from 'next/head';

export default class extends React.Component {
  static async getInitialProps ({res}) {
    try {
      let data = '';
      if (res) {
        console.log('server');
        data = await fetch('http://localhost:3000/static/home.html');
      } else {
        console.log('client');
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
        </Head>
        <div dangerouslySetInnerHTML={{__html: this.props.html}} />
      </div>
    )
  }
}
