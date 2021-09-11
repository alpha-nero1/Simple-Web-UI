import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

// Simple page component!
export default function FirstPost() {
    return <Layout>
        {/* Changes the metadata for the page! */}
        <Head>
            <title>First page!</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Link href="/">
            <a>Back home</a>
        </Link>
        <h1>First post</h1>
    </Layout>
}