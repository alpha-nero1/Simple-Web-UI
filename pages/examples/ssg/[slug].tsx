// pages/blog/[slug].js

import Head from 'next/head'

// Remember that getStaticPaths will return an object containing all
// posible slugs.
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://www.example.com/api/posts')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post: any) => ({
    params: { slug: post.slug }
  }))
  // Set fallback to blocking. Now any new post added post build will SSR
  // to ensure SEO. It will then be static for all subsequent requests
  return { paths, fallback: 'blocking' }
}

// Get static props (runs at build time)
export async function getStaticProps({ params }: any) {
  const res = await fetch(`https://www.example.com/api/blog/${params.slug}`)
  const data = await res.json()

  return {
    props: {
      blog: data
    }
  }
}

function BlogPost({ blog }: any) {
  return (
    <>
      <Head>
        <title>{blog.title} | My Site</title>
      </Head>
      <div>
        <h1>{blog.title}</h1>
        <p>{blog.text}</p>
      </div>
    </>
  )
}

export default BlogPost
