import fs from "fs";
import path from "path";
import matter from "gray-matter";

async function fetchAPI(query: string, variables: any = {}) {
  const urlString = process.env.NEXT_PUBLIC_WEBINY_API_URL;
  if (!urlString) {
    throw new Error("NEXT_PUBLIC_WEBINY_API_URL is not defined");
  }

  const req = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.WEBINY_API_SECRET}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  };
  const res = await fetch(urlString, req);

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

const postsDirectory = path.join(process.cwd(), "content/blog");

type PostFrontMatter = {
  title: string;
  date: string;
  image: string;
  author: { name: string; profilePic: string };
};
export type PostEntry = {
  id: string;
  frontMatter: PostFrontMatter;
  content: any;
  markdown?: string;
};

export function getSortedPostsData(): PostEntry[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents, { language: "yaml" });
    const { title, date, image } = matterResult.data;
    const entry: PostEntry = {
      id,
      frontMatter: {
        title,
        date: date.toDateString(),
        image,
        author: { name: "John Doe", profilePic: "/images/profile.jpg" },
      },
      content: matterResult.content,
    };
    return entry;
  });
}

export async function getSortedPostsDataCms(): Promise<PostEntry[]> {
  // Get file names under /posts
  const data = await fetchAPI(`
  {
    listBlogs {
      data {
        title,
        date,
        cover,
        content,
        markdown,
        authors {
          name
          profilePic
        }
      }
    }
  }
  `);

  return data.listBlogs.data.map((entry: any) => {
    const { title, date, cover, content, markdown, authors } = entry;
    return {
      id: title,
      frontMatter: {
        title,
        date,
        image: cover,
        author: authors[0],
      },
      content: content,
      markdown: markdown,
    };
  });
}
