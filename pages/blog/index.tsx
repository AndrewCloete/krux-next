import type { ReactElement } from "react";
import Layout from "../../components/layout";
import type { NextPageWithLayout } from "../_app";
import Link from "next/link";

import { getSortedPostsData, getSortedPostsDataCms, PostEntry } from "../../lib/posts";

const Page: NextPageWithLayout = (props: { allPostsData: PostEntry[] }) => {
  return (
    <div>
      <ul>
        {props.allPostsData.map(({ id, frontMatter }) => (
          <li key={id}>
            {frontMatter.title} &ensp; {frontMatter.date}
            &ensp;<Link href={`/blog/${id}`}>Link</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;

export async function getStaticProps() {
  // const allPostsData = getSortedPostsData();
  const allPostsData = await getSortedPostsDataCms() 
  return {
    props: {
      allPostsData,
    },
  };
}
