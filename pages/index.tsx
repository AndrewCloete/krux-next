import { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import styles from "../components/test.module.css";

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
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  // To implement nested layouts, see https://nextjs.org/docs/basic-features/layouts
  return <Layout>{page}</Layout>;
};

export default Page;
