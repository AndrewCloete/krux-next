import type { ReactElement } from "react";
import Layout from "../../components/layout";
import type { NextPageWithLayout } from "../_app";
import { RichTextRenderer } from "@webiny/react-rich-text-renderer";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";

import {
  getSortedPostsData,
  getSortedPostsDataCms,
  PostEntry,
} from "../../lib/posts";

const Page: NextPageWithLayout = (props: { postData: PostEntry }) => {
  function markdownToHtml(markdown: string | undefined) {
    return unified()
      .use(remarkParse)
      .use(remarkHtml)
      .processSync(markdown)
      .toString();
  }

  return (
    <div className="flex flex-col justify-center mt-5">
      <div className="mx-auto">
        <div className="block">
          <img
            src={props.postData.frontMatter.image}
            alt="..."
            className="mx-auto"
          />
          <div className="flex">
            <div className="mx-auto flex flex-col items-center -translate-y-1/2">
              <img
                src={props.postData.frontMatter.author.profilePic}
                className="rounded-full w-16 h-16 sm:w-24 sm:h-24"
                alt="..."
              />
              <div className="text-gray-600 text-lg">
                {props.postData.frontMatter.author.name}
              </div>
            </div>
          </div>
          <h1>{props.postData.frontMatter.title}</h1>
          <p>{props.postData.frontMatter.date}</p>
        </div>
      </div>
      <div className="lg:text-2xl mx-auto">
        {props.postData.content && (
          <article className="prose lg:prose-xl mx-3">
            <RichTextRenderer data={props.postData.content} />
          </article>
        )}
        {props.postData.markdown && (
          <article
            className="prose lg:prose-xl"
            dangerouslySetInnerHTML={{
              __html: markdownToHtml(props.postData.markdown),
            }}
          ></article>
        )}
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;

export async function getStaticPaths() {
  const allPostsData = await getSortedPostsDataCms();
  // const allPostsData = getSortedPostsData();
  const paths = allPostsData.map((post) => {
    return {
      params: {
        slug: post.id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const allPostsData = await getSortedPostsDataCms();
  // const allPostsData = getSortedPostsData();
  const postData = allPostsData.find((post) => post.id === params.slug);
  return {
    props: {
      postData,
    },
  };
}
