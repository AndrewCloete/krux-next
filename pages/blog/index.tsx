import type { ReactElement } from "react";
import Layout from "../../components/layout";
import type { NextPageWithLayout } from "../_app";
import Link from "next/link";

import {
  getSortedPostsData,
  getSortedPostsDataCms,
  PostEntry,
} from "../../lib/posts";

const Page: NextPageWithLayout = (props: { allPostsData: PostEntry[] }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 w-4/5 mx-auto mt-5">
        {props.allPostsData.map(({ id, frontMatter }) => (
          <div
            key={id}
            className="my-2 hover:-translate-y-0.5 transition rounded-lg"
          >
            <Link href={`/blog/${id}`}>
              <img src={frontMatter.image} alt="..." className="rounded-lg" />
            </Link>
            <article className="p-3 ">
              <div className="block">
                <h2 className="text-2xl 2xl:text-3xl">{frontMatter.title}</h2>
                <div className="text-gray-600 text-lg">Andrew</div>
                <div className="text-gray-600 italic">{frontMatter.date}</div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;

export async function getStaticProps() {
  // const allPostsData = getSortedPostsData();
  const allPostsData = await getSortedPostsDataCms();
  return {
    props: {
      allPostsData,
    },
  };
}
