import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

// Note: this is a direct copy from: https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
export function getSortedPostsData() {
    // Get file names under /posts
    // readdirSync returns a string array of file names in a dir...
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData: any[] = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
        id,
        ...matterResult.data
        }
    })
    // Sort posts by date
    return allPostsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
        return 1
        } else if (a > b) {
        return -1
        } else {
        return 0
        }
    });
}

interface GetAllPostIdResponse {
    params: { 
        id: string 
    };
}

/**
 "Important: The returned list is not just an array of strings — 
 it must be an array of objects that look like the comment above. 
 Each object must have the params key and contain an object with the id key 
 (because we’re using [id] in the file name). 
 Otherwise, getStaticPaths will fail."
 */
export function getAllPostIds(): GetAllPostIdResponse[] {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map(fn => ({
        params: {
            id: fn.replace(/\.md$/, '')
        }
    }))
}

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()
  
    // Combine the data with the id
    return {
      id,
      contentHtml,
      ...matterResult.data
    }
  }