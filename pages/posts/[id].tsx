import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css'

interface Post {
    id: string;
    title: string;
    date: string;
    contentHtml: string;
}

interface Props {
    postData: Post;
}

export default function Post({ postData }: Props) {
    return <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <br/>
            <br/>
            <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
            </div>
            <br/>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
        </article>
    </Layout>
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const postData = typeof params?.id === 'string' ? await getPostData(params.id) : null;
    return {
      props: {
        postData
      }
    }
  }

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}