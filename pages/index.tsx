import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts';
import { FeatureProducts } from '../components/products/feature-products';
import { Navbar } from '../components/core/navbar';


interface Props {
  allPostsData: any[];
}

export default function Home({ allPostsData }: Props) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Navbar />
      <section className={utilStyles.homepageHeader}>
          <h1 className={utilStyles.title}>What can we do for you?</h1>
          <h2 className={utilStyles.subtitle}>All the best products at the best prices.</h2>
          <Link href="/app/products">
            <button className={utilStyles.btnPrimary}>Shop now!</button>
          </Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <FeatureProducts />
      </section>
    </>
  )
}
