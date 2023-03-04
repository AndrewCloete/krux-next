import type { ReactElement } from "react";
import Layout from "../../components/layout";
import type { NextPageWithLayout } from "../_app";
import Link from "next/link";

import { getSortedPostsData, PostEntry } from "../../lib/posts";

const Page: NextPageWithLayout = (props: { allPostsData: PostEntry[] }) => {
  return (
    <div>
      <ul>
        {props.allPostsData.map(({ id, frontMatter }) => (
          <li key={id}>
            {frontMatter.title} &ensp; {frontMatter.date}
            <Link href={`/blog/${id}`}>Link</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  // To implement nested layouts, see https://nextjs.org/docs/basic-features/layouts
  return <Layout>{page}</Layout>;
};

export default Page;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
