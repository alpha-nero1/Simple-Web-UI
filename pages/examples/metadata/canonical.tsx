import Head from 'next/head';

export default function Canonical() {
    return (
        <div>
          <Head>
            <title>Canonical Tag Example</title>
            <link
              rel="canonical"
              href="https://example.com/blog/original-post"
              key="canonical"
            />
          </Head>
          <p>This post exists on two URLs.</p>
        </div>
      )
}