## SEO
+ Why is it important: https://nextjs.org/learn/seo/introduction-to-seo/importance-of-seo

&nbsp;

### Difference between 301 & 308 status code.
- The main difference is that 301 allows for request method changes (GET/POST) however 308 does not.

### 302 Temporary Redirect
302 indicates that the destination url is a temporary redirect.

### 410 Gone
410 indicates "gone" meaning that your access to the destination is no longer available. It's not used often but we may want to use it for:
- E-Commerce: Products permanently removed from inventory.
- Forum: Threads that have been deleted by the user.
- Blog: Blog post removed from site.

### 503 Service Unavailable
This indicates that the server is not ready to handle the request (your site is down). Returning 503 for your site is good if it is down for an extended period of time because it prevents loosing rankings long term.

## Site maps
"It's strongly recommended to use sitemaps and make them dynamic as new content is populated across your website. Static sitemaps are also valid, but they might be less useful to Google as it won't serve for constant discovery purposes."
- We can use getServerSideProps in a /sitemap.xml.tsx file to generate dynamic sitemaps, the good stuff.

### Meta Robot Tags
Directives that search engines will always respect, they can make the indexation of your site easier.
- The meta tag gives you flexibility to mark pages as noindex on demand. e.g.
`<meta name="robots" content="noindex,nofollow" />`
- "URLs that are restricted from bots crawling via robots.txt file will never be crawled by Google, but if the rules are added after pages are already indexed, pages might remain indexed. The best way to make sure that a page is not indexed is using the `noindex` tag."

#### Google Tags
- `<meta name="google" content="nositelinkssearchbox" />` tells google to not show searchbar from your site.
- `<meta name="google" content="notranslate" />` tells google to not auto translate the page.

### What are canonical tags?
A canonical URL is the URL of the page that search engines think is most representative from a set of duplicate pages on your site. It lets google know that a page is th original source of truth and not a duplicate.
- More here: https://nextjs.org/learn/seo/crawling-and-indexing/canonical

Let's imagine that our e-commerce shop allows products to be accessible via example.com/products/phone and example.com/phone.

Both are valid, working URLs, but we use canonical to prevent the detection of duplicate content that we own. If we decided that https://example.com/products/phone should be considered for rankings, we would create a canonical tag:

`<link rel="canonical" href="https://example.com/products/phone" />`


## Rendering and Ranking

### (SSG) Static Site Generation
Html is generated at build time and is sent pre-rendered meaning it is the best for SEO as all the content is present at the time that the bot reads the request response.

### (SSR) Server Side Rendering
Like SSG, SSR is pre-rendered making it great for SEO. SSR Html is built at request time, it is excellent for dynamic content. It is only beat out slightly by SSG because rendering on request could take a little longer than something that is already, ready.

### (ISR) Incremental Static Regeneration
If you have a lot of static pages, this can be really cumbersome to build all at build time, ISR allows for creation or update of static pages after the site is built. (not happening at build time or request time). (I think of it almost like hot module replacement)

### (CSR) Client Side Rendering
The worst for SEO. the site is entirely rendered on one page, a SAP (Single Page Application). It's perfect for data heavy dashboards and pages where SEO is irrelevent.

"The most important thing for SEO is that page data and metadata is available on page load without JavaScript. In this case SSG or SSR are going to be your best options. "

### (AMP) Accelerated Mobile Pages

"In 2016, Google began giving search ranking preference to web pages using AMP – a technology that enables developers to create web pages that load faster on mobile devices – at the cost of building and maintaining them over time."

### URL Structure
URLs for SEO should follow a standard if they are to be indexed well. They need to be
- Semantic: containing words and not arbitrary ids. Example: /learn/basics/create-nextjs-app is better than /learn/course-1/lesson-1
- Patterns that are logical and consistent: "For example, you want to have a folder that groups all product pages, instead of having different paths for each product that you have."
- Keyword focused: keywords in urls facilitate understanding of the content.
- Not parameter based: "Using parameters to build your URLs is generally not a good idea. They are not semantic in most cases, and search engines might confuse them and demote their rankings in results."

## Metadata

### Description
The description metadata tag is good for improving click through rate to links, it is the title that is shown in google search results.

### Open graph
Developed by FB allows revealing of data to search results. It can be used to show rich data in google. the tags prefixed with `og:` don't improve SEO but improve the sharing experience.
- Used in social media.
- See `open-graph.tsx`

### Structured data and JSON-LD
Structured data facilitates the understanding of your pages to search engines. The main vocabulary to do this is schema.org
- See `structured-data-jsonld.tsx`

## On page SEO
- Headings and H tags highlight what is important on the page.
- h1 is most important and should be similar to your title tag.

### Internal Links and the Page Rank Algorithm
The page rank algorithm is an algo that google has implemented that goes through every link on database and scores domains based on how many links they receive (quantity) and from which domains (quality). href needs to be present for these links.

# Performance and core web vitals.
**Web vitals** is an initiative created by google that ranks websites based on their user experience. **Core web vitals** is a subset of web vitals and consists of 3 primary metrics:
1. Largest Contentful Paint (LCP)
2. First Input Delay (FID)
3. Cumulative Layout Shift (CLS)

Scoring good in these three metrics creates a great experience for users and will be seen favouribly in search rankings. These 3 essentially measure loading, interactivity and visual stability

### Largest Contentful Paint (LCP)
Looks at the loading performance of the page. It measures the time it takes to get the largest element on the page visible within the viewport. "This could be a large text block, video, or image that takes up the primary real estate on the page."

- As the DOM is rendered, the largest element on the page may change. The Largest Contentful Paint doesn't stop counting until the largest image or element is seen on-screen.

### First Input Delay (FID)
Looks at how long it takes for the page to be able to receive user input.
- Note that this is different to Total Blocking Time (TBT) which measures how long the main thread of the browser is blocked when loading the page.

### Cumulative Layout Shift (CLS)
A measure of the overall layout stability. "A site that unexpectedly shifts layout as the page loads can lead to accidental user error and distraction."

CLS happens when elements have been shifted after initially being rendered by the DOM.


Weighting for vitals is however not equal, here is how they stack up effecting ranking:
- Largest Contentful Paint: 25%
- Total Blocking Time: 25%
- First Contentful Paint: 25%
- Speed Index: 15%
- Time to Interactive: 15%
- Cumulative Layout Shift: 5%

# Improving Core Web Vitals

## Lighthouse
Lighthouse is a simulated environment that helps us measure CWV.
- Lighthouse works by running a series of audits on a provided URL.
- Based on these audits, it generates a report on how well the page performed. If there are areas that need improvement, the report will provide insight on how to improve.

### So how do you use lighthouse?
1. Open Chrome.
2. In an incognito window, navigate to https://nextjs.org. (to avoid extensions effecting performance)
3. Open DevTools and click on Lighthouse tab.
4. Click Generate Report.

### What can we do to increase performance.
1. Use the nextjs image component to handle
- Ensuring our image is responsive on different screen sizes.
- Avoid optimizing our images with a third-party tool or library.
- Lazy-loading images as they enter the viewport

The component avoids shipping large images to devices with a smaller viewport and allows Next.js to adopt future image formats and serve those images to browsers that support them.

Automatic Image Optimization works with any image source. Even if the image is hosted by an external data source, like a CMS, it can still be optimized.

#### How does Automatic Image Optimization Work?
- On-demand Optimization
Instead of optimizing images at build time, Next.js optimizes images on-demand as users request them. Unlike static site generators and static-only solutions, build times don't increase, whether shipping ten images or ten million images.
- Lazy Loaded Images
Images are lazy loaded by default. Page speed won't be penalized for images housed outside of the viewport. Images only load when they come into view.
- Avoids CLS
Images are always rendered to avoid Cumulative Layout Shift (CLS).

### Use dynamic imports
Next.js supports ES2020 dynamic `import()` for JavaScript. It also works with SSR. by using dynamic imports we can remove as much JS as possible when rendering pages. This helps with FID and TTI.

#### Dynamic imports for components
Sometimes we don't need particular components on initial load. For components however we need to use `dynamic` from next.
- `import dynamic from 'next/dynamic'`
Then like this
- 
```const CodeSampleModal = dynamic(() => import('../components/CodeSampleModal'), {
  ssr: false
})
```
- As we do not need this component on the server, we have used `ssr: false` to disable it.
- We want to also defer the loading of the component so that it is only loaded when the user needs it. We can simply wrap the component in a condition to do this
```
{
  isModalOpen && (
    <CodeSampleModal
      isOpen={isModalOpen}
      closeModal={() => setIsModalOpen(false)}
    />
  )
}
```

##### Other optimisations
- Use HTTP2: to solve this problem, we can deploy to somewhere that supports HTTP2 (e.g. Vercel).
- Image elements do no have explicit width andheight: This is actually a bug in lighthouse and does not affect site performance.

### Optimising fonts
82% of web pages for desktop use web fonts. Custom fonts are important for the branding, design, and cross-browser/device consistency of your site. However, using a web font should not come at the cost of performance.
- Next.js has built-in [Automatic Webfont Optimization](https://nextjs.org/docs/basic-features/font-optimization)
-  By default, Next.js will automatically inline font CSS at **build time**, eliminating an extra round trip to fetch font declarations. This results in improvements to First Contentful Paint (FCP) and Largest Contentful Paint (LCP).

## Monitoring Core Web Vitals
Once you have optimized your site, it's important to monitor while in production so you can continue to iterate.
When monitoring Core Web Vitals, tracking over time is key rather than relying on one-off lab tests.
- We can implement custom reporting: https://nextjs.org/learn/seo/monitor/custom-reporting by exporting a function `reportWebVitals` in the _app.tsx.
- We can use monitoring tools: [here](https://nextjs.org/learn/seo/monitor/data-studio)
- Other tools: https://nextjs.org/learn/seo/monitor/other-tools


## Cool quotes from the Docs
- According to a study performed by Amazon in 2012, one additional second of load time could potentially cost the company 1.6 billion USD.

- While it's true that Core Web Vitals are an initiative designed to measure and push the improvement of page experience and search ranking, it's the users who ultimately benefit from these changes.