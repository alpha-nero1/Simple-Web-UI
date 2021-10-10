This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# 🖥️ Simple Web UI

![Simple Web UI Preview](./thrifty-simple.gif)

&nbsp;
&nbsp;

A simple next.js application. It is a follow-along implementation of the tutorial on the next.js site, found here: https://nextjs.org/learn/basics/create-nextjs-app
The project demonstrates some key things:
1. All material from the official next.js website tutorial/documentation.
2. SEO good practices.
3. Simple next.js webiste implementation.

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

**This is important ^** - It essentially says that if we have a file at `/pages/api/hello.ts` and it exports a default function you can use that route as an API e.g. GET `{domain}/api/hello`

## 📖 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Basics
- The main app entry-point is the `_app.tsx` file, you would do initial app setup in this file.
- the `index.tsx` at the root of the `pages/` dir would be your `/` entry page.
- The `Link` tags allow you to do **client-side** navigation in the application. (as opposed to normal `<a>` tag)
- `{' '}` adds an empty space, which is used to divide text over multiple lines.

### Styles
- Global styles can only be imported in the `_app.js` file.
- You can import css modules into component files to scope them and assign classes via `className={style.className}`

### Pre-rendering
- Next.js has two forms of pre-rendering:
    + `static generation`: generates html at **build time** the pre-rendered html is used on each request.
        + You can use static generation for Marketing pages, Blog posts, E-commerce product listings, Help and documentation. It is very efficient because it is built once and just served via the webserver.
    + `server-side rendering`: generates html entirely on each request. (npm run dev does this)
        + We use this if the page features frequesntly updated data and page content could change on each request...
- getStaticProps is only allowed in page files.

### Server side rendering
- To use Server-side Rendering, you need to export `getServerSideProps` instead of getStaticProps from your page.

```
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    }
  }
}
```

### Client side rendering
We of course could just render the page normally and make api requests at page load time
if the situation was right, for instance if we implemented a dashboard.
- Also next.js has created an excellent webhook for fetching data called `SWR` you can read up more about it here https://swr.vercel.app/ but in a nutshell it offers caching, revalidation, focus tracking, refetching on interval and more...

### Dynamic Routes
In Next.js we can handle dyanmic paghes by wrapping the file name with `[]` to highlight the dynamic property e.g. `/posts/[id].js`. We can then catch this id by implementing the `getStaticPaths` function in the page file.
+ Dynamic API routes: https://nextjs.org/docs/api-routes/dynamic-api-routes

### TypeScript
- Next.js types that are available [types](https://nextjs.org/learn/excel/typescript/nextjs-types)

### SEO
(see the info folder for more information...)


## 👾 Good quotes from the docs

- Links explained: "in a production build of Next.js, whenever `Link` components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!"

- Static assets: "Next.js can serve static assets, like images, under the top-level public directory. Files inside public can be referenced from the root of the application similar to pages."

- Rendering: "By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO."

- **hydration**: "Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called hydration.)"

- `getStaticProps()`: "This is possible because getStaticProps only runs on the server-side. It will never run on the client-side. It won’t even be included in the JS bundle for the browser. That means you can write code such as direct database queries without them being sent to browsers."
    + "Because it’s meant to be run at build time, you won’t be able to use data that’s only available during request time, such as query parameters or HTTP headers."

- SEO: "The main objective of Google's search engine is to give users the best results possible while taking localization and misspellings into account. In every case, Google cares about giving users a fast and smooth result with great website experience"

- Page experience is becoming part of google's rankings: https://developers.google.com/search/blog/2021/04/more-details-page-experience

&nbsp;

### ✔️ Progress (14/14)
Basics
+ Create a Next.js app ✅
+ Navigate between pages ✅
+ Assets, metadata and css ✅
+ Pre-rendering and data fetching ✅
+ Dynamic routes ✅
+ API routes ✅
+ Deploying your Next.js app -

Search Engine Optimisation
+ Introduction to SEO ✅
+ Crawling and indexing ✅
+ Rendering and ranking ✅
+ Performance & core web vitals ✅
+ Improving your core web vitals ✅
+ Monitoring your core web vitals ✅

Excel
+ Typescript ✅
