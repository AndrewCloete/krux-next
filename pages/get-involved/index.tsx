import type { ReactElement } from "react";
import Layout from "../../components/layout";
import type { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="mx-auto">
          <div className="prose lg:prose-xl">
            There are several ways you can get involved with Krux
            <div className="bg-khaki my-2 px-4 py-3 rounded-lg font-sans text-xs font-semibold tracking-widest w-full sm:w-auto text-center">
              <span className="mx-auto text-white">SUBSCRIBE</span>
            </div>
            <a href="https://uwm.org/projects/63685/" className="text-white">
              <div className="bg-khaki my-2 px-4 py-3 rounded-lg font-sans text-xs font-semibold tracking-widest w-full sm:w-auto text-center text-white">
                <span className="mx-auto">DONATE</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
