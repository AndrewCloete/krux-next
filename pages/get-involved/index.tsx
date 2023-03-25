import { useState } from "react";
import type { ReactElement } from "react";
import Layout from "../../components/layout";
import type { NextPageWithLayout } from "../_app";
import {
  ButtonPrimary,
  ButtonSecondary,
  TextInput,
  Modal,
} from "@/components/input";

import { useRef } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

import axios from "axios";

/**
 * Reference:
 * https://www.npmjs.com/package/@marsidev/react-turnstile
 * https://developers.cloudflare.com/turnstile/reference/testing/
 * https://nextjs.org/docs/basic-features/environment-variables
 */

class BackendService {
  private static baseUrl =
    "https://z76ro7fay1.execute-api.eu-west-1.amazonaws.com";

  constructor() {}

  async register(email: string, token: string) {
    const result = await axios.post(
      `${BackendService.baseUrl}/prod/hello`,
      { email, token },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log(result);
  }
}

function RegisterForm() {
  const [email, setEmail] = useState("");
  const ref = useRef<TurnstileInstance>(null);
  const turnstileKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

  const handleSubmit = async () => {
    console.log(email);
    // const backend = new Backend();
    // await backend.register(email, ref.current?.getResponse() || "");
  };

  return (
    <>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <TextInput
            id="email"
            placeHolder="Email"
            value={email}
            onChange={(e) => setEmail(e)}
          />
        </div>
        <div className="my-2">
          <span className="pr-2">
            <ButtonPrimary label="Register" onClick={handleSubmit} />
          </span>
          <ButtonSecondary
            label="Token test"
            onClick={() => {
              const response = ref.current?.getResponse();
              console.log(response);
            }}
          />
        </div>
        <Turnstile
          ref={ref}
          siteKey={turnstileKey}
          options={{ theme: "light" }}
        />
      </div>
    </>
  );
}
function BecomeAPatronForm() {
  const [email, setEmail] = useState("");
  const ref = useRef<TurnstileInstance>(null);
  const turnstileKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

  const handleSubmit = async () => {
    console.log(email);
    // const backend = new Backend();
    // await backend.register(email, ref.current?.getResponse() || "");
  };

  return (
    <>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <TextInput
            id="email"
            placeHolder="Email"
            value={email}
            onChange={(e) => setEmail(e)}
          />
        </div>
        <div className="my-2">
          <span className="pr-2">
            <ButtonPrimary label="Pay" onClick={handleSubmit} />
          </span>
          <ButtonSecondary
            label="Token test"
            onClick={() => {
              const response = ref.current?.getResponse();
              console.log(response);
            }}
          />
        </div>
        <Turnstile
          ref={ref}
          siteKey={turnstileKey}
          options={{ theme: "light" }}
        />
      </div>
    </>
  );
}

const Page: NextPageWithLayout = () => {
  const [registerOpen, setRegisterOpen] = useState(false);
  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="mx-auto">
          Register
          <div className="prose lg:prose-xl">
            There are several ways you can get involved with Krux
          </div>
          <div className="my-2">
            <ButtonPrimary
              label="Register"
              onClick={() => setRegisterOpen(true)}
            />
          </div>
          <div className="my-2">
            <ButtonPrimary label="Become a patron" onClick={() => {}} />
          </div>
          <div className="my-2">
            <ButtonPrimary label="Donate" onClick={() => {}} />
          </div>
        </div>
      </div>
      {registerOpen && (
        <Modal
          setOpenModal={(isOpen) => {
            setRegisterOpen(isOpen);
          }}
        >
          <RegisterForm />
        </Modal>
      )}
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
