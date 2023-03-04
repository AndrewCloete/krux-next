import type { ReactElement } from "react";
import Layout from "../../components/layout";
import type { NextPageWithLayout } from "../_app";

import { getSortedPostsData, PostEntry } from "../../lib/posts";

const Page: NextPageWithLayout = (props: { postData: PostEntry }) => {
  return (
    <div>
      <h1>{props.postData.frontMatter.title}</h1>
      <p>{props.postData.frontMatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: props.postData.content }} />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;

export async function getStaticPaths() {
  const allPostsData = getSortedPostsData();
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
  const allPostsData = getSortedPostsData();
  const postData = allPostsData.find((post) => post.id === params.slug);
  return {
    props: {
      postData,
    },
  };
}
