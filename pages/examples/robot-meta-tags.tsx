import Head from 'next/head';

export default function RobotMetaTagsExample() {
    // No index: tells google to not index this page.
    // No follow: tells google to not follow links on this pages.
    // The default value is index, follow.
    return <div>
        <Head>
            <meta name="robots" content="noindex,nofollow" />
            {/* We can specifically target googlebot with rules if we wanted to. */}
            <meta name="googlebot" content="noindex,nofollow" />
        </Head>
        <h1>Simple Meta Tags Example</h1>
    </div>
}