import type { ReactElement } from "react";
import Layout from "../../components/layout";
import type { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <div className="mx-6 my-3">
        There are several ways you can get involved with Krux
        <a href="https://uwm.org/projects/63685/" className="text-white">
          <div className="bg-khaki my-2 px-4 py-3 rounded-lg font-sans text-xs font-semibold tracking-widest w-full sm:w-auto text-center">
            <span className="mx-auto">DONATE</span>
          </div>
        </a>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
