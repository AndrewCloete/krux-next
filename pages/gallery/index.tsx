import type { ReactElement } from "react";
import Layout from "../../components/layout";
import type { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return <p>gallery</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  // To implement nested layouts, see https://nextjs.org/docs/basic-features/layouts
  return <Layout>{page}</Layout>;
};

export default Page;
