import { useState } from "react";
import type { ReactElement } from "react";
import Layout from "../../components/layout";
import type { NextPageWithLayout } from "../_app";
import {
  ButtonPrimary,
  ButtonSecondary,
  TextInput,
  Checkbox,
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
  const [newsLetter, setNewsLetter] = useState(false);
  const ref = useRef<TurnstileInstance>(null);
  const turnstileKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

  const handleSubmit = async () => {
    console.log({ email, newsLetter });
    // const backend = new Backend();
    // await backend.register(email, ref.current?.getResponse() || "");
  };

  return (
    <>
      <div className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <TextInput
            id="email"
            placeHolder="Email"
            value={email}
            onChange={(e) => setEmail(e)}
          />
        </div>
        <Checkbox
          text="Subscribe to the newsletter"
          value={newsLetter}
          onChange={(e) => setNewsLetter(e)}
        ></Checkbox>
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
          <div className="prose lg:prose-xl px-3">
            There are several ways you can get involved with Krux
            <br />
            <h2>Register</h2>
            <p>
              You can add yourself the the Krux mailing list by registering. By
              default you will not receive any periodicals or marketing emails,
              only key organisation communications. You can chose to opt in to
              selected mailing lists on the registration form.
            </p>
            <p>
              You can update your email preferences or unsubscribe completely at
              any time using the link below. We will never share your email
              address. We take your privacy very seriously.
            </p>
            <div className="my-2">
              <span className="mr-1">
                <ButtonPrimary
                  label="Register"
                  onClick={() => setRegisterOpen(true)}
                />
              </span>
              <span>
                <ButtonSecondary
                  label="Update preferences"
                  onClick={() => setRegisterOpen(true)}
                />
              </span>
            </div>
            <h2>Become a patron</h2>
            <p>
              You can become a patron of Krux for a year with a R500 donation.
              You need to be registered in order to become a patron. ... todo
            </p>
            <div className="my-2">
              <ButtonPrimary label="Become a patron" onClick={() => {}} />
            </div>
            <h2>Donate</h2>
            <p>
              If you wish to simply make a financial donation to Krux, you can
              do so here. You do not need to be registered to donate.
            </p>
            <div className="my-2">
              <span className="mr-1">
                <ButtonPrimary label="Donate" onClick={() => {}} />
              </span>
              <span>
                <ButtonSecondary label="East Mountain" onClick={() => {}} />
              </span>
            </div>
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
