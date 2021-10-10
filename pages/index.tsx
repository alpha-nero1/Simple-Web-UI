import Head from 'next/head'
import Link from 'next/link'
import { PageLayout } from '../components/core/page-layout/page-layout';
import utilStyles from '../styles/utils.module.css';
import { FeatureProducts } from '../components/products/feature-products';
import { Navbar } from '../components/core/navbar/navbar';
import SearchBar from '../components/searchbar/searchbar';
import HeadAdvanced from '../components/seo/HeadAdvanced';

interface Props {
  allPostsData: any[];
}

export default function Home({ allPostsData }: Props) {
  return (
    <PageLayout>
      <HeadAdvanced 
        title="Thrifty.com | Get your money's worth."
        description="thrifty.com find what you need second hand for cheap!"
        google={{ translate: 'notranslate', nositelinkssearchbox: 'nositelinkssearchbox' }}
        openGraph={{ image: '/images/product-iphone.jpg' }}
      />
      <section className={utilStyles.homepageHeader}>
          <video className={utilStyles.videoView} autoPlay loop muted>
            <source src="/videos/clouds.mp4" type="video/mp4" />
          </video>
          <h1 className={utilStyles.title}>Thrifty.com</h1>
          <h2 className={utilStyles.subtitle}>All the best products at the best prices.</h2>
          <SearchBar />
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <FeatureProducts />
      </section>
    </PageLayout>
  )
}
