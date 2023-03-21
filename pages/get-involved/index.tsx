import type { ReactElement } from "react";
import Layout from "../../components/layout";
import type { NextPageWithLayout } from "../_app";

import { useRef } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

/**
 * Reference:
 * https://developers.cloudflare.com/turnstile/reference/testing/
 * https://nextjs.org/docs/basic-features/environment-variables
 */

function RegisterForm() {
  const ref = useRef<TurnstileInstance>(null);
  const turnstileKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

  return (
    <>
      <Turnstile ref={ref} siteKey={turnstileKey} />
      <button onClick={() => alert(ref.current?.getResponse())}>
        Get response
      </button>
    </>
  );
}

const Page: NextPageWithLayout = () => {
  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="mx-auto">
          <div className="prose lg:prose-xl">
            There are several ways you can get involved with Krux
            <div className="bg-khaki my-2 px-4 py-3 rounded-lg font-sans text-xs font-semibold tracking-widest w-full sm:w-auto text-center">
              <span className="mx-auto text-white">REGISTER</span>
            </div>
            <div className="bg-khaki my-2 px-4 py-3 rounded-lg font-sans text-xs font-semibold tracking-widest w-full sm:w-auto text-center">
              <span className="mx-auto text-white">BECOME A PATRON</span>
            </div>
            <a href="https://uwm.org/projects/63685/" className="text-white">
              <div className="bg-khaki my-2 px-4 py-3 rounded-lg font-sans text-xs font-semibold tracking-widest w-full sm:w-auto text-center text-white">
                <span className="mx-auto">DONATE</span>
              </div>
            </a>
          </div>
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
