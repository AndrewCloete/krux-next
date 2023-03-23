import { useState } from "react";
import type { ReactElement } from "react";
import Layout from "../../components/layout";
import type { NextPageWithLayout } from "../_app";

import { useRef } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

/**
 * Reference:
 * https://www.npmjs.com/package/@marsidev/react-turnstile
 * https://developers.cloudflare.com/turnstile/reference/testing/
 * https://nextjs.org/docs/basic-features/environment-variables
 */

const initialFormData: Record<string, string> = {
  fullName: "",
};

function RegisterForm() {
  const [formData, setFormData] = useState(initialFormData);
  const ref = useRef<TurnstileInstance>(null);
  const turnstileKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

  const setValue = (k: string, v: string) => {
    setFormData((oldData) => ({
      ...oldData,
      [k]: v,
    }));
  };

  const handleSubmit = async () => {
    const endpoint =
      "https://z76ro7fay1.execute-api.eu-west-1.amazonaws.com/prod/test/hello";
    const submitData = new FormData();
    for (const k in formData) {
      submitData.append(k, formData[k]);
    }
    submitData.append("token", ref.current?.getResponse() || "");
    try {
      const result = await fetch(endpoint, {
        body: submitData,
        method: "post",
      });

      const outcome = await result.json();
      console.log(outcome);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Turnstile ref={ref} siteKey={turnstileKey} />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        onClick={() => {
          const response = ref.current?.getResponse();
          console.log(response);
        }}
      >
        Get response
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2"
        onClick={handleSubmit}
      >
        Submit
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
