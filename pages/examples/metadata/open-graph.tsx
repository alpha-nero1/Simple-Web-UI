import Head from 'next/head';
import React from 'react'

export default function OpenGraph() {
    return (
        <div>
          <Head>
            <title>Cool Title</title>
            <meta name="description" content="Checkout our cool page" key="desc" />
            <meta property="og:title" content="Social Title for Cool Page" />
            <meta
              property="og:description"
              content="And a social description for our cool page"
            />
            {/* Preview images on social media. */}
            <meta
              property="og:image"
              content="https://example.com/images/cool-page.jpg"
            />
          </Head>
          <h1>Cool Page</h1>
          <p>This is a cool page. It has lots of cool content!</p>
        </div>
      );
}
