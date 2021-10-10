import Head from 'next/head'
import React from 'react'

interface Props {
    title: string;
    description?: string;
    google?: {
        translate?: string;
        nositelinkssearchbox?: string
    };
    canonical?: string;
    robots?: string;
    openGraph?: {
        title?: string;
        description?: string;
        image?: string
    };
    structuredData?: string;
    icon?: string;
    children?: any;
}

// A component designed to optimise SEO, given options it
// scaffolds and includes all relevant SEO tags.
export default function HeadAdvanced(props: Props) {
    // Default OG if it was not provided...
    if (!props.openGraph) props.openGraph = {};
    if (!props?.openGraph?.title) props.openGraph.title = props.title;
    if (!props?.openGraph?.description) props.openGraph.description = props.description;
    return (
        <Head>
            <title>{props.title}</title>
            {props.description && <meta name="description" content={props.description}></meta>}
            {props?.google?.translate && <meta key="google-translate" name="google" content={props?.google?.translate}></meta>}
            {props?.google?.nositelinkssearchbox && <meta key="google-nositelinkssearchbox" name="google" content={props?.google?.nositelinkssearchbox}></meta>}
            {props?.openGraph?.title && <meta key="og-title" name="og:title" content={props?.openGraph?.title}></meta>}
            {props?.openGraph?.description && <meta key="og-description" name="og:description" content={props?.openGraph?.description}></meta>}
            {props?.openGraph?.image && <meta key="og-image" name="og:image" content={props?.openGraph?.image}></meta>}
            {props?.structuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: props?.structuredData }}></script>}
            {props?.icon && <link rel="icon" href={props.icon} />}
            {/* So more neiche things can be included if you wish. */}
            {props.children}
        </Head>
    )
}
