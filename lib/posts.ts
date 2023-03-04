import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

type PostFrontMatter = { title: string; date: string; image: string };
export type PostEntry = {
  id: string;
  frontMatter: PostFrontMatter;
  content: string;
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
      },
      content: matterResult.content,
    };
    return entry;
  });
}
