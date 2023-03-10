import { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import styles from "./index.module.css";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <div
        className={
          "h-[100vh] flex flex-col justify-center " + styles.bg_dining1
        }
      >
        <div className="mx-auto flex flex-col">
          <h1 className="text-7xl flex mx-auto text-gray-300">KRUX</h1>
          <h1 className="text-lg font-sans text-gray-300">
            A Community of Christian Formation
          </h1>
        </div>
      </div>
      <div className="bg-lkhaki py-10">
        <div className="mx-auto w-3/4">
          <div className="mb-2">
            <h1 className="text-3xl text-khaki font-semibold -mb-2">ABOUT</h1>
            <h1 className="text-5xl text-blood font-mono">KRUX</h1>
          </div>
          <div className="font-sans flex flex-wrap">
            <div className="lg:w-1/2 px-2">
              Our mission is best described as
              <span className="italic">theological discipleship</span>-a form of
              discipleship that seeks to bring both thought and behaviour under
              the lordship of Christ in fellowship with the work of the Holy
              Spirit. Primarily this means gaining a deep understanding of God's
              great act toward us in Christ, and therefore, the consequences of
              the Gospel for all of human endeavour. It rests on a foundation of
              Biblical exposition and historical orthodoxy, and is expressed as
              a living theology in robust engagement with the real world.
            </div>
            <div className="lg:w-1/2 px-2">
              We believe a deep theological grounding can only be truly achieved
              within community. At KRUX, community is undergirded by study
              courses and dialogue, mentorship, practicing hospitality, and
              engaging with the Arts.
              <br />
              <div className="bg-khaki px-4 py-3 rounded-md my-2 inline-block font-semibold text-xs">
                <a href="./what-we-do" className="text-white">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  // To implement nested layouts, see https://nextjs.org/docs/basic-features/layouts
  return <Layout>{page}</Layout>;
};

export default Page;
