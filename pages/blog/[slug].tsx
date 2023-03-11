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
    <div>
      <h1>{props.postData.frontMatter.title}</h1>
      <p>{props.postData.frontMatter.date}</p>
      <div className="px-6">
        <article className="p-3 ">
          <div className="block">
            <div className="text-gray-600 italic">{"2006-01-02"}</div>
          </div>
          <div className="lg:text-2xl">
            {props.postData.content && (
              <article className="prose lg:prose-xl">
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
        </article>
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
